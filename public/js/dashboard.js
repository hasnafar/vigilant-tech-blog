$(document).on('click', '.post', function() {

    var title=$(".title").val();
    var content=$(".content").val();

    console.log(title);
    console.log(content);

    postObjectToSend={
                      "title":title,
                      "content":content
                    }
            
            
            fetch('/api/posts', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(postObjectToSend),
            });
})