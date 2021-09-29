import React, { Component } from 'react';
import './MergeFiles.css';
import Grid from '@material-ui/core/Grid';
import Files from 'react-files';

class Mergepdf extends Component {
    constructor() {
		super();
	this.state = {
		files: [],
		hasFiles: false,
		modalOpen: false,
		modalLoading: false,
		modalMsg: {
			err: null,
			success: null
		},
		testValue: true
	}
}


onFilesChange = (files) => {
    console.log("files", files);
    this.setState({
        files,
        hasFiles: files.length > 0 ? true : false
    }, () => {
        // console.log(this.state)
    })
}

onFilesError = (error, file) => {
    console.log('[LOG] Error code ' + error.code + ': ' + error.message)
}

    render() {
    return (
        <div className="files">
            <Grid container spacing={10} justify="center" className='gridContainer'>
					<Grid item className='dropFilesGridZone'>
						<Files
							ref='files'
							className='dropFilesZone'
							onChange={this.onFilesChange}
							onError={this.onFilesError}
							accepts={['.pdf']}
							multiple
							maxFiles={1000}
							maxFileSize={10000000}
							minFileSize={0}
							clickable
						>
							<div className='dropFilesZoneDiv'>Drop files here or click to upload</div>
						</Files>
					</Grid>
				</Grid>





            {/* <div className="header"></div> */}
            {/* <div className="main">
                <div class="tool tool--small">
                    <div class="tool__workarea" id="workArea">
                        <div id="dropArea"></div>
                        <div class="tool__header">
                            <h1 class="tool__header__title">Merge PDF files</h1>
                            <h2 class="tool__header__subtitle">Combine PDFs in the order you want with the easiest PDF merger available.</h2>
                        </div>
                        <div class="uploading__bar uploading__bar--small">
                            <span class="uploading__bar__completed"></span>
                        </div>
                        <div id="uploader" class="uploader">
                            <a class="uploader__btn tooltip--left active" id="pickfiles" href="javascript:;" title="Add more files" style="position: relative; z-index: 1;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke-linecap="round" stroke-width="2" stroke="#fff" fill="none" stroke-linejoin="round"><desc>Upload your file and transform it.</desc><path d="M10 1.833v16.333"></path><path d="M1.833 10h16.333"></path></svg>
                                <span>Select PDF files</span>
                            </a>
                            <div class="uploader__extra">
                                <a class="btn-icon uploader__extra__btn tooltip tooltip--right" id="uploadDisk" href="javascript:;" title="Upload from your computer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="#fff" fill-rule="nonzero"><desc>Upload from computer.</desc><path d="M4.8 19c-.442 0-.8-.448-.8-1s.358-1 .8-1h10.4c.442 0 .8.448.8 1s-.358 1-.8 1H4.8z"></path><path d="M7 15h6l-1 3H8z"></path><path d="M2 2v11h16V2H2zM1 0h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1z"></path></svg>
                                </a>
                                <a id="gdrive_file_selector" class="btn-icon uploader__extra__btn tooltip tooltip--right active" title="Select PDF from Google Drive">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16"><path fill="#FFF" d="M8.7375,5.80725 L3.021,15.70725 L0.12375,10.69725 L5.847,0.795 L8.7375,5.80725 Z M17.865,10.38225 L12.078,10.39125 L6.378,0.489 L12.1725,0.489 L17.865,10.38225 Z M17.87625,10.9875 L14.9865,15.9975 L3.5415,15.99 L6.43425,10.98375 L17.87625,10.9875 Z"></path></svg>
                                </a>
                                <a id="dropbox_file_selector" class="btn-icon uploader__extra__btn tooltip tooltip--right active" title="Select PDF from Dropbox">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="#FFF" d="M5.3475,0.7035 L0.096,4.125 L3.708,7.03725 L9.018,3.765 L5.3475,0.7035 Z M17.904,4.14 L12.66525,0.7275 L9.01875,3.7725 L14.29875,7.03875 L17.904,4.14 Z M9.01875,10.305 L12.66525,13.35975 L17.904,9.945 L14.2995,7.0395 L9.01875,10.305 Z M0.096,9.9585 L5.3475,13.35975 L9.01875,10.305 L3.70875,7.0455 L0.096,9.9585 Z M9.01875,10.9635 L5.35575,14.0385 L3.786,13.02 L3.786,14.16 L9.01875,17.30475 L14.271,14.15175 L14.271,13.0125 L12.693,14.031 L9.01875,10.9635 Z"></path></svg>
                                </a>
                            </div>
                            <div class="uploader__droptxt">or drop PDFs here</div>
                            <div id="html5_1fgh8ka5k1n1l1qgdjne11q57rf4_container" class="moxie-shim moxie-shim-html5" style="position: absolute; top: 0px; left: 0px; width: 324px; height: 80px; overflow: hidden; z-index: 0;">
                                <input id="html5_1fgh8ka5k1n1l1qgdjne11q57rf4" type="file" style="font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" multiple="" accept=".pdf" tabindex="-1"/>
                                </div>
                                </div>
                        <div id="ad" class="add" style="display: none;">
                            <div id="div-gpt-ad-1619852245510-0" 
                            data-google-query-id="CKKM1dvunPMCFU9d1Qod9YsHlg" 
                            style="width: 1080px !important; max-width: 1080px !important; padding-left: 0px !important; margin-left: -24px !important; margin-right: 0px !important;">

                                <div id="google_ads_iframe_/22379932707/ILOVEPDF_Banner_0__container__" style="border: 0pt none; max-height: none !important; max-width: 1080px !important; padding: 0px !important; width: 1080px !important;"><iframe id="google_ads_iframe_/22379932707/ILOVEPDF_Banner_0" title="3rd party ad content" name="google_ads_iframe_/22379932707/ILOVEPDF_Banner_0" width="1080" height="100" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" srcdoc="" data-google-container-id="1" style="border: 0px; vertical-align: bottom;" data-load-complete="true"></iframe></div></div>
                        </div>
                        <div class="sidetools">
                            <a id="settingsToogle" class="btn-icon btn-icon--white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <path d="M24 14.187V9.813c-2.148-.766-2.726-.802-3.027-1.53s.083-1.17 1.06-3.223L18.94 1.968c-2.026.963-2.488 1.364-3.224 1.06-.727-.302-.768-.89-1.527-3.027H9.813c-.764 2.144-.8 2.725-1.53 3.027-.752.313-1.203-.1-3.223-1.06L1.968 5.06c.977 2.055 1.362 2.493 1.06 3.224S2.146 9.05 0 9.813v4.375c2.14.76 2.725.8 3.027 1.528.304.734-.08 1.167-1.06 3.223l3.093 3.093c2-.95 2.47-1.373 3.223-1.06.728.302.764.88 1.53 3.027h4.374c.758-2.13.8-2.723 1.537-3.03.745-.308 1.186.1 3.215 1.062l3.093-3.093c-.975-2.05-1.362-2.492-1.06-3.223.3-.726.88-.763 3.027-1.528zm-4.875.764c-.577 1.394-.068 2.458.488 3.578l-1.084 1.084c-1.093-.543-2.16-1.076-3.573-.5-1.396.58-1.8 1.693-2.188 2.877h-1.534c-.398-1.185-.79-2.297-2.183-2.875-1.42-.588-2.507-.045-3.58.488L4.39 18.53c.557-1.118 1.066-2.18.487-3.58-.58-1.39-1.69-1.784-2.876-2.182v-1.533c1.185-.398 2.297-.79 2.875-2.184s.068-2.46-.488-3.58L5.47 4.387c1.082.538 2.162 1.077 3.58.488 1.392-.577 1.785-1.7 2.183-2.875h1.534c.398 1.185.792 2.297 2.184 2.875 1.42.588 2.506.045 3.58-.488l1.084 1.084c-.556 1.12-1.065 2.187-.488 3.58s1.69 1.784 2.875 2.183v1.534c-1.188.398-2.302.79-2.877 2.183zM12 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2a5 5 0 1 0 0 10 5 5 0 1 0 0-10z"></path></svg>
                            </a>
                            <a class="btn-icon btn-icon--white tooltip active tooltip--left order" 
                            id="orderByName" data-order="asc" href="javascript:;" 
                            title="Order files by name">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="#383E45" fill-rule="evenodd"><path d="M2.947 15.297V.23c0-.067.026-.123.077-.166S3.14 0 3.22 0h1.635c.08 0 .145.022.196.065s.077.1.077.166v15.066h2.5a.39.39 0 0 1 .261.087.28.28 0 0 1 .102.222c0 .077-.038.154-.114.23l-3.62 3.076a.42.42 0 0 1-.261.087c-.09 0-.178-.03-.26-.087L.11 15.828c-.113-.103-.14-.215-.08-.338.06-.13.174-.193.34-.193h2.575z" fill-rule="nonzero"></path><path d="M11.222 20.2l2.94-7.52c.194-.496.555-.67 1.1-.67h.54c.513 0 .97.12 1.22.804l2.746 7.386c.083.214.222.603.222.845 0 .536-.485.965-1.068.965-.5 0-.86-.174-1.026-.603l-.582-1.6h-3.66l-.596 1.6c-.153.43-.47.603-1.012.603-.624 0-1.054-.375-1.054-.965 0-.24.14-.63.222-.845zm5.602-1.93l-1.3-3.874h-.028L14.15 18.27h2.663zM11.346 8l4.75-6.083h-3.66c-.602 0-1.088-.333-1.088-.958S11.832 0 12.434 0h5.53c.538 0 .973.25.973 1.042 0 .278-.102.583-.294.82l-4.826 6.222h4.096c.602 0 1.088.333 1.088.958s-.486.958-1.088.958h-5.696C11.448 10 11 9.722 11 8.875c0-.36.154-.625.346-.875z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="#383E45" fill-rule="evenodd"><path d="M2.947 15.297V.23c0-.066.026-.122.077-.165S3.14 0 3.22 0h1.634c.08 0 .146.022.196.065s.077.1.077.166v15.066h.33 2.18c.106 0 .193.03.26.087a.28.28 0 0 1 .102.222c0 .077-.038.154-.114.23l-3.62 3.076c-.075.058-.162.087-.26.087a.46.46 0 0 1-.261-.087L.1 15.828c-.112-.103-.14-.216-.078-.328.06-.14.174-.203.34-.203h2.575z" fill-rule="nonzero"></path><path d="M11.212 8.083L14.016.66c.185-.5.53-.66 1.058-.66h.516c.5 0 .926.12 1.164.794l2.62 7.3c.08.212.212.595.212.833 0 .53-.463.952-1.02.952-.476 0-.82-.172-.98-.595l-.556-1.587h-3.5l-.57 1.587c-.146.423-.45.595-.966.595C11.41 9.87 11 9.5 11 8.917c0-.238.132-.622.212-.833zm5.344-1.905l-1.23-3.823H15.3l-1.283 3.823h2.54zm-5.2 13.442l4.908-5.794h-3.783c-.622 0-1.124-.317-1.124-.913S11.86 12 12.482 12h5.715c.556 0 1.005.238 1.005.992a1.21 1.21 0 0 1-.304.78L13.9 19.7h4.233c.622 0 1.124.317 1.124.913s-.503.913-1.124.913h-5.887c-.794 0-1.257-.265-1.257-1.072 0-.344.16-.595.357-.833z"></path></svg>
                            </a>
                            <a class="btn-icon btn-icon--white tooltip active tooltip--left" 
                            id="toggleCover" href="javascript:;"
                             title="Show-hide pdf covers">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                                viewBox="0 0 22 19">
                                    <path d="M11 4c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92A11.82 11.82 0 0 0 21.99 9c-1.73-4.4-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C9.74 4.13 10.35 4 11 4zM1 1.27L3.74 4A11.8 11.8 0 0 0 0 9c1.73 4.4 6 7.5 11 7.5a11.78 11.78 0 0 0 4.38-.84l.42.42L18.73 19 20 17.73 2.27 0 1 1.27zM6.53 6.8l1.55 1.55A2.82 2.82 0 0 0 8 9c0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.4.53-2.2.53-2.76 0-5-2.24-5-5 0-.8.2-1.53.53-2.2zm4.3-.78L14 9.17V9c0-1.66-1.34-3-3-3l-.17.01z" fill="#383E45" fill-rule="evenodd"></path></svg>
                            </a>
                        </div>        <div class="tool__workarea__rendered" id="fileGroups"></div>
                    </div>
                    <div id="sidebar" class="tool__sidebar">
                        <div class="option__panel option__panel--active" id="merge-options">
                            <div class="option__panel__title">Merge PDF</div>
                            <div class="option__panel__content">
                                <div class="info drag">To change the order of your PDFs, drag and drop the files as you want.</div>
                                <div class="info multiple">Please, select more PDF files by clicking again on ’Select PDF files’. <br />Select multiple files by mantaining pressed ’Ctrl’</div>
                                <div class="multiple hidden">Please, select more PDF files</div>
                            </div>
                        </div>    </div>
                </div>
                <div id="uploading" class="uploading">
                    <div id="upload-status" class="uploading__status">
                        <div class="uploading__status__title drive">
                            <img src="/img/svg_icons/preload.svg" alt="Uploading"/>Getting files from Drive</div>
                        <div class="uploading__status__title dropbox">
                            <img src="/img/svg_icons/preload.svg" alt="Uploading"/>Getting files from Dropbox</div>
                        <div class="uploading__status__title user">Uploading file <span class="uploading__status__current">0</span> of <span class="uploading__status__total">0</span></div>
                        <div class="uploading__status__file"></div>
                        <div class="uploading__status__info">
                            Time left <span id="timeLeft">- seconds</span> -
                            Upload speed <span id="uploadSpeed">- MB/S</span>        </div>
                        <div class="uploading__bar">
                            <span class="uploading__bar__completed"></span>
                        </div>
                        <div class="uploading__status__percent">
                            <div class="uploading__status__percent__value"></div>
                            Uploaded        </div>


                    </div>
                    <div id="upload-files" class="uploading__files"></div>
                </div>
            </div> */}

            {/* <div id="process" class="process">
                <p id="processText" class="processAction title2">Merging PDFs...</p>
                <img src="/img/svg_icons/preload.svg" alt="Processing" />
                <div id="waitnotify"></div>
            </div> */}


            {/* <div class="footer">
                <div class="footer__copy">
                    © FileTwistter 2021 ® - Your PDF Editor    </div>
            </div> */}
        </div>
    )
        }
}

export default Mergepdf;