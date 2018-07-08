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
          // this second argument is optional and can to be sent as extra data with the upload
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
            console.log(e.percent);
            this.set('onProgress', e.percent);
        });
        
        uploader.on('didUpload', () => {
            alert('uploaded');
        })
    }

});
