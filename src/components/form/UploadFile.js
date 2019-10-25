import React, { PureComponent } from 'react'
import {
    Upload, Icon, message
} from 'antd'
import { injectAuthorizationHeader } from 'Utils/apiUtil'
import { uploadFile } from 'Utils/urlUtil'
import { T } from 'Utils/funcUtil'

class UploadFile extends PureComponent {

    render() {
        const { field, onChange } = this.props

        const props = {
            showUploadList: { showPreviewIcon: false },
            name: 'file',
            action: uploadFile,
            headers: {
                'Token': injectAuthorizationHeader(),
            },
            onRemove: (file) => {
                const index = field.value.indexOf(file);
                const newFileList = field.value.slice();
                newFileList.splice(index, 1);
                onChange(newFileList)
            },
            beforeUpload: (file) => {
                const isImage = file.type === 'image/jpeg' || file.type === 'image/png';
                if (!isImage) {
                    message.error('只能上传图片!');
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    message.error('图片必须小于2M!');
                }

                return isLt2M && isImage
            },
            onChange: (info) => {
                let fileList = [...info.fileList];

                fileList = fileList.map((file) => {
                    if (file.response) {
                        file.url = file.response.url;
                        file.relativeUrl = file.response.url;
                    }
                    return file;
                });

                onChange(fileList);
            },
            fileList: field.value,
        };

        const uploadButton = (
            <div>
                <Icon type={'plus'} style={{ fontSize: '32px', color: '#808080' }} />
            </div>
        );

        return (
            <div className={`form-control ${field.error ? 'has-error' : ''}`}>
                <div className="form-control-label"><label className={`${field.required ? 'form-control-item-required' : null}`}>{T(field.label)}</label></div>
                <div className="form-control-item">
                    <Upload {...props} listType="picture-card" disabled={field.disabled ? field.disabled : false}
                        className="avatar-uploader">
                        {uploadButton}
                    </Upload>
                    <div className={'form-explain-holder'}>
                        {field.error ? field.errorMsg : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default UploadFile