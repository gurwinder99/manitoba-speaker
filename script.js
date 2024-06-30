document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('postForm');

    postForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const photoUpload = document.getElementById('photoUpload').files;
        const message = document.getElementById('message').value;
        const contactInfo = document.getElementById('contactInfo').value;

        if (message.trim() === '') {
            alert('Message cannot be empty!');
            return;
        }

        let formData = new FormData();
        for (let i = 0; i < photoUpload.length; i++) {
            formData.append('photos[]', photoUpload[i]);
        }
        formData.append('message', message);
        formData.append('contactInfo', contactInfo);

        // You can send the formData to a server using fetch or XMLHttpRequest
        // For example:
        // fetch('your-server-endpoint', {
        //     method: 'POST',
        //     body: formData
        // }).then(response => response.json())
        //   .then(data => console.log(data))
        //   .catch(error => console.error('Error:', error));

        alert('Post shared successfully!');
        postForm.reset();
    });
});
