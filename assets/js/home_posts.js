{
    //method to submit the data for new post ajax
    let create_post = function(){
        let new_post_form= $('#new-post-form');

        new_post_form.submit(function(e){
            e.preventDefault();

            $.ajax({
                type: 'post',
                url: '/posts/create',
                data: new_post_form.serialize(),
                success: function(data){
                    let newPost = newPostDom(data.data.post);
                    $('#post-list-container>ul').prepend(newPost);
                    deletePost($(' .delete-post-button'), newPost);
                },error: function(error){
                    console.log(error.responseText);
                }
            });

        });
    }
    //method to create a post in dom
    let newPostDom = function(post){
        return $(`<li id="post-${post._id}">
                    <p>
                        <small>
                            <a class="delete-post-button" href="/posts/destroy/${post._id}">x</a>
                        </small>
                        ${post.content}
                        <br>
                        <small>
                            <span>&nbsp;&nbsp;(</span>${post.user.name}<span>)</span>
                        </small>
                    </p>
                    <div class="post-comments">
                        <form action="/comments/create" method="POST">
                            <input type="text" name="content" placeholder="Type here to add comment ..." required>
                            <input type="hidden" name="post" value="${post._id}">
                            <input type="submit" value="Add comment">
                        </form>

                        <div class="post-comments-list">
                            <ul id="post-comments-${post._id}">
                                
                            </ul>
                        </div>
                    </div>
                </li>
        `);
    }


    //method to delete a post from dom 
    let deletePost = function(deleteLink){
        $(deleteLink).clicked(function(e){
            e.preventDefault();
            $.ajax({
                type: 'get',
                url: $(deleteLink).prop('href'),
                success: function(data){
                    $(`#post-${data.data.post_id}`).remove();
                },error: function(error){
                    console.log(error.responseText);
                }
            });
        });
    }



    create_post();
}