import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import './style.css';

class ImageCrop extends PureComponent {
    state = {
        src: null,
        crop: {
            unit: '%',
            width: 300,
            aspect: 1 / 1,
        },
    };

    onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () =>
                this.setState({ src: reader.result })
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    // If you setState the crop in here you should return false.
    onImageLoaded = image => {
        this.imageRef = image;
    };

    onCropComplete = crop => {
        this.makeClientCrop(crop);
        // this.props.onFileUploaded(crop);
    };

    onCropChange = (crop/*, percentCrop*/) => {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        this.setState({ crop });
        // this.props.onFileUploaded(crop);
    };

    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(
                this.imageRef,
                crop,
                'newFile.jpeg'
            );
            this.setState({ croppedImageUrl });
        }
    }

    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve/*, reject*/) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    //reject(new Error('Canvas is empty'));
                    console.error('Canvas is empty');
                    return;
                }
                blob.name = fileName;
                window.URL.revokeObjectURL(this.fileUrl);
                this.fileUrl = window.URL.createObjectURL(blob);

                const imageData64 = canvas.toDataURL('image/' + this.fileUrl);
                this.props.onFileUploaded(imageData64);

                resolve(this.fileUrl);
            }, 'image/jpeg');
        });
    }

    render() {
        const { crop, /* croppedImageUrl, */ src } = this.state;

        return (
            <div className="image-area">
                {src && (
                    <div>
                        <input type="file" accept="image/*" onChange={this.onSelectFile} />
                    </div>
                )}
                <div className="dropzone">

                    {src ? (
                        <ReactCrop
                            src={src}
                            crop={crop}
                            ruleOfThirds
                            onImageLoaded={this.onImageLoaded}
                            onComplete={this.onCropComplete}
                            onChange={this.onCropChange}
                        />
                    ) : (
                            <div>
                                <input type="file" accept="image/*" onChange={this.onSelectFile} />
                            </div>
                        )}
                    {/* {croppedImageUrl && (
                        <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
                    )} */}
                </div>
            </div>
        );
    }
}

export default ImageCrop;

