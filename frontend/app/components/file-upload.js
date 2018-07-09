import FileField from 'ember-uploader/components/file-field';
import Uploader from 'ember-uploader/uploaders/uploader';

export default FileField.extend({

    onProgress: 'onProgress',

    filesDidChange(files) {
        const uploader = Uploader.create({
          url: this.get('url'),
          method: 'POST'
          
        });
    
        if (!Ember.isEmpty(files)) {
            uploader.upload(files[0]).then(
              (imageUrl) => {
                console.log(imageUrl);
                this.sendAction('addImage', imageUrl)
              }
            ).catch(
                (err) => {
                    console.log(err)
                }
            );
        }

        uploader.on('progress', (e) => {
            this.set('onProgress', 99);
        });
        
        uploader.on('didUpload', () => {
            this.set('onProgress', 100);
            swal({
                title:"",
                text: "Image uploaded",
                type: "success",
                button: "Aww yiss!",
            });
            this.set('onProgress', 0);
            
        })
    }

});
