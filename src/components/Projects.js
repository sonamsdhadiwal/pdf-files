import React from 'react';
import './Files.css';
import '../App.css';
import tests from '../tests.png';
import Navbar from './Navbar';
import Mergepdf from './Mergepdf';
import merge from '../merge.png';
import split from './split.jpg';
import Filesdragdrop from './Filesdragdrop';
import compress from './compress.png';
import pdfWord from './pdfWord.png';

export default function Projects() {
  return (
    <div>

      {/* <div className="App">!!!!
       <header className="App-header">
      <img src={test} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        </header>
    </div> */}
      {/* Header */}
      <div className="header">
        <div className="header__main col-md-12">

          <div class="social">
            <a class="social__item social__item--twitter" href="https://twitter.com/ilovepdf_com" rel="noopener" target="_blank" title="Follow us on Twitter!"></a>
            <a class="social__item social__item--facebook" href="https://www.facebook.com/ilovepdfcom-238648522858564/" rel="noopener" target="_blank" title="Like us on Facebook!"></a>
          </div>

          <div class="brand">
            <div class="brand__logo">
              <a href="/" title="FileTwistter">
                <img src={tests} alt="filetwistter" />
              </a>
            </div>
          </div>

          <div className="header__nav">
            <Navbar />
          </div>


          {/* <div class="header__nav">
                <div class="main-menu" id="menuBig">
        <ul class="head__nav">
            <li><a href="/merge_pdf">Merge PDF</a></li>
            <li><a href="/split_pdf">Split PDF</a></li>
            <li><a href="/compress_pdf">Compress PDF</a></li>
            <li class="dropdown dropdown-full">
                <span>Convert PDF<i class="ico ico--down"></i></span>
                <ul class="dropdown-menu mega menu-full menu-full--convert">
                    <li>
                        <ul>
                            <li><div>Convert to PDF</div></li>
                            <li><a href="/jpg_to_pdf"><i class="ico ico--jpgpdf"></i>JPG to PDF</a></li>
                            <li><a href="/word_to_pdf"><i class="ico ico--wordpdf"></i>WORD to PDF</a></li>
                            <li><a href="/powerpoint_to_pdf"><i class="ico ico--powerpointpdf"></i>POWERPOINT to PDF</a></li>
                            <li><a href="/excel_to_pdf"><i class="ico ico--excelpdf"></i>EXCEL to PDF</a></li>
                            <li><a href="/html-to-pdf"><i class="ico ico--htmlpdf"></i> HTML to PDF</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><div>Convert from PDF</div></li>
                            <li><a href="/pdf_to_jpg"><i class="ico ico--pdfjpg"></i> PDF to JPG</a></li>
                            <li><a href="/pdf_to_word"><i class="ico ico--pdfword"></i> PDF to WORD</a></li>
                            <li><a href="/pdf_to_powerpoint"><i class="ico ico--pdfpowerpoint"></i> PDF to POWERPOINT</a></li>
                            <li><a href="/pdf_to_excel"><i class="ico ico--pdfexcel"></i> PDF to EXCEL</a></li><li>
                            </li><li><a href="/convert-pdf-to-pdfa"><i class="ico ico--pdfa"></i> PDF to PDF/A</a></li>
                        </ul>
                    </li>

                </ul>
            </li>
            <li class="dropdown dropdown-full" id="menuSmall">
                <span>All PDF tools<i class="ico ico--down"></i></span>
                <span class="nav__icon"><i class="ico ico--tools"></i></span>
                <ul class="dropdown-menu mega menu-full">
                    <li>
                        <ul>
                            <li><div>Organize PDF</div></li>
                            <li><a href="/merge_pdf"><i class="ico ico--merge"></i> Merge PDF</a></li>
                            <li><a href="/split_pdf"><i class="ico ico--split"></i> Split PDF</a></li>
                            <li><a href="/remove-pages"><i class="ico ico--remove"></i> Remove pages</a></li>
                            <li><a href="/split_pdf#split,extract"><i class="ico ico--extract"></i> Extract pages</a></li>
                            <li><a href="/organize-pdf"><i class="ico ico--organize"></i> Organize PDF</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><div>Optimize PDF</div></li>
                            <li><a href="/compress_pdf"><i class="ico ico--compress"></i> Compress PDF</a></li>
                            <li><a href="/repair-pdf"><i class="ico ico--repair"></i> Repair PDF</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><div>Convert to PDF</div></li>
                            <li><a href="/jpg_to_pdf"><i class="ico ico--jpgpdf"></i> JPG to PDF</a></li>
                            <li><a href="/word_to_pdf"><i class="ico ico--wordpdf"></i>WORD to PDF</a></li>
                            <li><a href="/powerpoint_to_pdf"><i class="ico ico--powerpointpdf"></i> POWERPOINT to PDF</a></li>
                            <li><a href="/excel_to_pdf"><i class="ico ico--excelpdf"></i> EXCEL to PDF</a></li>
                            <li><a href="/html-to-pdf"><i class="ico ico--htmlpdf"></i> HTML to PDF</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><div>Convert from PDF</div></li>
                            <li><a href="/pdf_to_jpg"><i class="ico ico--pdfjpg"></i> PDF to JPG</a></li>
                            <li><a href="/pdf_to_word"><i class="ico ico--pdfword"></i>PDF to WORD</a></li>
                            <li><a href="/pdf_to_powerpoint"><i class="ico ico--pdfpowerpoint"></i> PDF to POWERPOINT</a></li>
                            <li><a href="/pdf_to_excel"><i class="ico ico--pdfexcel"></i> PDF to EXCEL</a></li><li>
                            </li><li><a href="/convert-pdf-to-pdfa"><i class="ico ico--pdfa"></i> PDF to PDF/A</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><div>Edit PDF</div></li>
                            <li><a href="/rotate_pdf"><i class="ico ico--rotate"></i>Rotate PDF</a></li>
                            <li><a href="/add_pdf_page_number"><i class="ico ico--pagenumber"></i> Add page numbers</a></li>
                            <li><a href="/pdf_add_watermark"><i class="ico ico--watermark"></i> Add watermark</a></li>
                            <li><a href="/edit-pdf"><i class="ico ico--editpdf"></i>Edit PDF</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><div>PDF security</div></li>
                            <li><a href="/unlock_pdf"><i class="ico ico--unlock"></i> Unlock PDF</a></li>
                            <li><a href="/protect-pdf"><i class="ico ico--protect"></i>Protect PDF</a></li>
                            <li><a href="/sign-pdf"><i class="ico ico--sign"></i>Sign PDF</a></li>
                                                    </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
            </div> */}


          {/* <div className="brand"> Hello */}
          {/* <div className="brand__logo">
            <img src= {tests} alt="filetwistter"/>
              <a href="./projects" title="File Twistter">
                <img src= {tests} alt="filetwistter"/>
              </a>
            </div> */}
          {/* </div> */}
          <div className="header__nav"></div>
          <div className="desktop tooltip tooltip--bottom" title="filetwistter Desktop, work-offline"></div>
          <div className="top-menu">

            <ul className="nav">
              <li class="nav__item nav__item--gray">
                <a href="/login"><span>Log in</span></a>
              </li>
              <li class="nav__item nav__item--red">
                <a href="/register">
                  <i class="ico ico--user"></i>
                  <span>Sign up</span></a>
              </li>

            </ul>

          </div>
        </div>
      </div>

      <div className="main">
        <div class="home-title">
          <h1 class="title">Free Solution to all your file converting problems.Everything you need for different conversions is at one place.</h1>
          <h2 class="subtitle">Everything is 100% FREE and easy to use online! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.</h2>
        </div>

        <div className="tools">
          <div class="row">
            <div class="col-md-3">
              <a href="/merge-pdf" title="Merge Pdf" component={Filesdragdrop}>
                <div className="tools__label">
                  <img src={merge} title="Merge Pdf Files" />
                </div>
                <h3>Merge Pdf </h3>
                <div class="tools__item__content">
                  <p>Combine PDFs in the order you want with the easiest PDF merger available.</p>
                </div>
                {/* <img src={tests} /> */}
              </a>
            </div>
            <div class="col-md-3">
              <a href="/split_pdf" title="Split PDF">
                <div className="tools__label">

                <img src={split} title="Split Pdf Files" />
                </div>
                <h3>Split PDF</h3>
                <div class="tools__item__content">
                  <p>Separate one page or a whole set for easy conversion into independent PDF files.</p>
                </div>
              </a></div>
            <div class="col-md-3">
              <a href="/compress_pdf" title="Compress PDF">
                <div className="tools__label">
                <img src={compress} title="Compress Pdf Files" />
                </div>
                <h3>Compress PDF</h3>
                <div class="tools__item__content">
                  <p>Reduce file size while optimizing for maximal PDF quality.</p>
                </div>
              </a>
            </div>
            <div class="col-md-3">
              <a href="/pdf_to_word" title="PDF to Word">
                <div className="tools__label">
                <img src={pdfWord} title="Convert Pdf to Word Files" />
                </div>
                <h3>PDF to Word</h3>
                <div class="tools__item__content">
                  <p>Easily convert your PDF files into easy to edit DOC and DOCX documents. The converted WORD document is almost 100% accurate.</p>
                </div>
              </a>
            </div>
          </div>
          <div class="row">
            {/* Pdf to Powerpoint */}
            {/* <div class="col-md-3">
              <a href="/pdf_to_powerpoint" title="PDF to Powerpoint">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path d="M32.324 15.656h-9.55c-2.477 0-3.375.258-4.28.742a5.06 5.06 0 0 0-2.098 2.102c-.484.902-.742 1.8-.742 4.277v9.55H5.18c-1.8 0-2.453-.187-3.113-.54a3.69 3.69 0 0 1-1.527-1.527C.188 29.598 0 28.945 0 27.145V5.18c0-1.8.188-2.453.54-3.113A3.69 3.69 0 0 1 2.066.539C2.727.188 3.38 0 5.18 0h21.965c1.8 0 2.453.188 3.113.54a3.69 3.69 0 0 1 1.527 1.527c.352.66.54 1.313.54 3.113zm0 0" fill-rule="evenodd" fill="rgb(95.294118%,85.098039%,80%)"></path><path d="M14.477 7.52c0-.477-.395-.863-.883-.863s-.883.387-.883.863v3.844L7.566 6.316a.89.89 0 0 0-1.246 0c-.168.16-.258.38-.258.61s.1.453.258.613l5.145 5.05H7.55c-.488 0-.883.387-.883.867s.395.863.883.863h6.047a.85.85 0 0 0 .34-.066c.215-.086.387-.254.477-.47.05-.102.066-.215.066-.328l.004-5.934zm0 0" fill="rgb(81.568627%,27.058824%,14.901961%)"></path><g fill-rule="evenodd"><path d="M22.855 17.676H44.82c1.8 0 2.453.188 3.113.543.648.344 1.184.875 1.527 1.527.352.656.54 1.31.54 3.11V44.82c0 1.8-.187 2.453-.54 3.113a3.69 3.69 0 0 1-1.527 1.527c-.66.352-1.312.54-3.113.54H22.855c-1.8 0-2.453-.187-3.113-.54-.648-.344-1.18-.88-1.527-1.527-.352-.66-.54-1.312-.54-3.113V22.855c0-1.8.188-2.453.54-3.113.348-.648.88-1.18 1.527-1.527.66-.352 1.313-.54 3.113-.54zm0 0" fill="rgb(100%,46.27451%,31.764706%)"></path><path d="M38.367 34.648C37.28 35.55 35.828 36 34.008 36H32.39v5H29V26.5h5.313c3.79 0 5.688 1.54 5.688 4.62 0 1.453-.543 2.633-1.633 3.535zM33.82 29H32.5v4.5h1.32c1.785 0 2.68-.758 2.68-2.273 0-1.484-.89-2.227-2.68-2.227zm0 0" fill="rgb(100%,100%,100%)"></path></g></svg>
                </div>
                <h3>PDF to Powerpoint</h3>
                <div class="tools__item__content">
                  <p>Turn your PDF files into easy to edit PPT and PPTX slideshows.</p>
                </div>
              </a>
            </div> */}

            {/* Pdf to Excel */}
            {/* <div class="col-md-3">
              <a href="/pdf_to_excel" title="PDF to Excel">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path d="M32.324 15.656h-9.55c-2.477 0-3.375.258-4.28.742a5.06 5.06 0 0 0-2.098 2.102c-.484.902-.742 1.8-.742 4.277v9.55H5.18c-1.8 0-2.453-.187-3.113-.54a3.69 3.69 0 0 1-1.527-1.527C.188 29.598 0 28.945 0 27.145V5.18c0-1.8.188-2.453.54-3.113A3.69 3.69 0 0 1 2.066.539C2.727.188 3.38 0 5.18 0h21.965c1.8 0 2.453.188 3.113.54a3.69 3.69 0 0 1 1.527 1.527c.352.66.54 1.313.54 3.113zm0 0" fill-rule="evenodd" fill="rgb(76.078431%,89.803922%,76.470588%)"></path><path d="M14.477 7.52c0-.477-.395-.863-.883-.863s-.883.387-.883.863v3.844L7.566 6.316a.89.89 0 0 0-1.246 0c-.168.16-.258.38-.258.61s.1.453.258.613l5.145 5.05H7.55c-.488 0-.883.387-.883.867s.395.863.883.863h6.047a.85.85 0 0 0 .34-.066c.215-.086.387-.254.477-.47.05-.102.066-.215.066-.328l.004-5.934zm0 0" fill="rgb(18.039216%,44.705882%,21.568627%)"></path><g fill-rule="evenodd"><path d="M22.855 17.676H44.82c1.8 0 2.453.188 3.113.543.648.344 1.184.875 1.527 1.527.352.656.54 1.31.54 3.11V44.82c0 1.8-.187 2.453-.54 3.113a3.69 3.69 0 0 1-1.527 1.527c-.66.352-1.312.54-3.113.54H22.855c-1.8 0-2.453-.187-3.113-.54-.648-.344-1.18-.88-1.527-1.527-.352-.66-.54-1.312-.54-3.113V22.855c0-1.8.188-2.453.54-3.113.348-.648.88-1.18 1.527-1.527.66-.352 1.313-.54 3.113-.54zm0 0" fill="rgb(36.862745%,63.137255%,38.431373%)"></path><path d="M36.61 41l-2.508-4.72c-.102-.176-.195-.5-.3-.973h-.04c-.047.223-.16.56-.336 1.012L30.9 41H27l4.64-7.25-4.246-7.25h3.992l2.082 4.348c.164.344.313.754.438 1.227h.04c.082-.285.234-.703.457-1.266l2.316-4.31h3.66l-4.37 7.19L40.5 41zm0 0" fill="rgb(100%,100%,100%)"></path></g></svg>
                </div>
                <h3>PDF to Excel</h3>
                <div class="tools__item__content">
                  <p>Pull data straight from PDFs into Excel spreadsheets in a few short seconds.</p>
                </div>
              </a>
            </div> */}

            {/* Word to Pdf */}
            {/* <div class="col-md-3">
              <a href="/word_to_pdf" title="Word to PDF">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path d="M17.676 34.344h9.55c2.477 0 3.375-.258 4.28-.742a5.04 5.04 0 0 0 2.098-2.102c.484-.902.742-1.8.742-4.277v-9.547H44.82c1.8 0 2.453.188 3.113.54s1.176.87 1.527 1.527.54 1.31.54 3.113V44.82c0 1.8-.187 2.453-.54 3.113a3.69 3.69 0 0 1-1.527 1.527c-.66.352-1.312.54-3.113.54H22.855c-1.8 0-2.453-.187-3.113-.54s-1.172-.87-1.527-1.527-.54-1.312-.54-3.113zm0 0" fill-rule="evenodd" fill="rgb(37.254902%,51.372549%,77.647059%)"></path><path d="M43.94 37.137c0-.477-.395-.863-.883-.863s-.883.387-.883.863v3.844l-5.145-5.047c-.348-.34-.902-.34-1.25 0a.85.85 0 0 0-.258.609.86.86 0 0 0 .258.613l5.145 5.05h-3.914c-.488 0-.883.387-.883.867s.395.867.883.867h6.05c.113-.004.227-.023.336-.07a.87.87 0 0 0 .477-.465c.05-.105.066-.22.066-.332l.004-5.934zm0 0" fill="rgb(100%,100%,100%)"></path><path d="M27.145 32.324H5.18c-1.8 0-2.453-.187-3.113-.543S.89 30.914.54 30.254 0 28.95 0 27.145V5.18c0-1.8.188-2.453.54-3.113A3.69 3.69 0 0 1 2.066.539C2.727.188 3.38 0 5.18 0h21.965c1.8 0 2.453.188 3.113.54s1.172.87 1.527 1.527.54 1.313.54 3.113v21.965c0 1.8-.187 2.453-.54 3.113s-.87 1.176-1.527 1.527-1.312.54-3.113.54zm0 0" fill-rule="evenodd" fill="rgb(86.27451%,89.803922%,98.039216%)"></path><path d="M20.844 8.61h2.96l-2.94 14.64H17.77l-1.777-9.035-1.824 9.035h-3.203L8.04 8.61h3.164l1.508 9.363 1.938-9.363h3.004l.04.203 1.688 9.1zm0 0" fill="rgb(16.078431%,34.117647%,58.431373%)"></path></svg>
                </div>
                <h3>Word to PDF</h3>
                <div class="tools__item__content">
                  <p>Make DOC and DOCX files easy to read by converting them to PDF.</p>
                </div>
              </a>
            </div> */}

            {/* Poerpoint to Pdf */}
            {/* <div class="col-md-3">
              <a href="/powerpoint_to_pdf" title="Powerpoint to PDF">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path d="M17.676 34.344h9.55c2.476 0 3.375-.258 4.28-.742a5.04 5.04 0 0 0 2.097-2.102c.495-.902.743-1.8.743-4.277v-9.547H44.82c1.8 0 2.453.187 3.114.54.656.355 1.175.87 1.527 1.527s.54 1.31.54 3.113V44.82c0 1.8-.187 2.453-.54 3.114-.35.656-.87 1.175-1.526 1.527S46.62 50 44.82 50H22.855c-1.8 0-2.453-.187-3.113-.54s-1.172-.87-1.527-1.526-.54-1.312-.54-3.113zm0 0" fill-rule="evenodd" fill="rgb(100%,46.27451%,31.764706%)"></path><path d="M43.94 37.137c0-.477-.393-.864-.88-.864s-.884.387-.884.864v3.843l-5.146-5.046c-.346-.34-.9-.34-1.25 0-.163.16-.257.38-.257.61a.86.86 0 0 0 .258.613l5.145 5.05h-3.914c-.49 0-.882.387-.882.867s.393.867.882.867H43.063c.113-.002.227-.022.335-.07.215-.085.387-.253.477-.464a.75.75 0 0 0 .065-.332l.005-5.934zm0 0" fill="rgb(100%,100%,100%)"></path><g fill-rule="evenodd"><path d="M27.145 32.324H5.18c-1.8 0-2.453-.187-3.113-.543S.89 30.914.54 30.254 0 28.95 0 27.145V5.18c0-1.8.188-2.453.54-3.113A3.69 3.69 0 0 1 2.066.539C2.727.188 3.38 0 5.18 0h21.965c1.8 0 2.453.188 3.113.54s1.172.87 1.527 1.527.54 1.313.54 3.113v21.965c0 1.8-.187 2.453-.54 3.113s-.87 1.176-1.527 1.527-1.312.54-3.113.54zm0 0" fill="rgb(95.294118%,85.098039%,80%)"></path><path d="M19.367 17.156c-1.086.898-2.54 1.348-4.36 1.348H13.39V23.5H10V9h5.313C19.102 9 21 10.54 21 13.62c0 1.453-.543 2.637-1.633 3.535zM14.82 11.5H13.5V16h1.32c1.785 0 2.68-.758 2.68-2.273 0-1.484-.89-2.227-2.68-2.227zm0 0" fill="rgb(81.568627%,27.058824%,14.901961%)"></path></g></svg>
                </div>
                <h3>Powerpoint to PDF</h3>
                <div class="tools__item__content">
                  <p>Make PPT and PPTX slideshows easy to view by converting them to PDF.</p>
                </div>
              </a>
            </div> */}

          </div>
          <div className="row ">
            {/* Excel to Pdf */}
            {/* <div class="col-md-3">
              <a href="/excel_to_pdf" title="Excel to PDF">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path d="M17.676 34.344h9.55c2.477 0 3.375-.258 4.28-.742a5.04 5.04 0 0 0 2.098-2.102c.484-.902.742-1.8.742-4.277v-9.547H44.82c1.8 0 2.453.188 3.113.54s1.176.87 1.527 1.527.54 1.31.54 3.113V44.82c0 1.8-.187 2.453-.54 3.113a3.69 3.69 0 0 1-1.527 1.527c-.66.352-1.312.54-3.113.54H22.855c-1.8 0-2.453-.187-3.113-.54s-1.172-.87-1.527-1.527-.54-1.312-.54-3.113zm0 0" fill-rule="evenodd" fill="rgb(36.862745%,63.137255%,38.431373%)"></path><path d="M43.94 37.137c0-.477-.395-.863-.883-.863s-.883.387-.883.863v3.844l-5.145-5.047c-.348-.34-.902-.34-1.25 0a.85.85 0 0 0-.258.609.86.86 0 0 0 .258.613l5.145 5.05h-3.914c-.488 0-.883.387-.883.867s.395.867.883.867h6.05c.113-.004.227-.023.336-.07a.87.87 0 0 0 .477-.465c.05-.105.066-.22.066-.332l.004-5.934zm0 0" fill="rgb(100%,100%,100%)"></path><g fill-rule="evenodd"><path d="M27.145 32.324H5.18c-1.8 0-2.453-.187-3.113-.543S.89 30.914.54 30.254 0 28.95 0 27.145V5.18c0-1.8.188-2.453.54-3.113A3.69 3.69 0 0 1 2.066.539C2.727.188 3.38 0 5.18 0h21.965c1.8 0 2.453.188 3.113.54s1.172.87 1.527 1.527.54 1.313.54 3.113v21.965c0 1.8-.187 2.453-.54 3.113s-.87 1.176-1.527 1.527-1.312.54-3.113.54zm0 0" fill="rgb(76.078431%,89.803922%,76.470588%)"></path><path d="M19.11 23.5l-2.508-4.72c-.102-.176-.195-.5-.3-.973h-.04c-.047.223-.16.56-.336 1.012L13.4 23.5H9.5l4.64-7.25L9.895 9h3.992l2.082 4.348c.164.344.313.754.438 1.227h.04c.082-.285.234-.703.457-1.266L19.22 9h3.66l-4.37 7.19L23 23.5zm0 0" fill="rgb(18.039216%,44.705882%,21.568627%)"></path></g></svg>
                </div>
                <h3>Excel to PDF</h3>
                <div class="tools__item__content">
                  <p>Make EXCEL spreadsheets easy to read by converting them to PDF.</p>
                </div>
              </a>
            </div> */}

            {/* Edit Pdf */}
            {/* <div class="col-md-3">
              <div class="badge badge--new">New!</div>
              <a href="/edit-pdf" title="Edit PDF">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50" fill="none" fill-rule="evenodd"><path d="M16.024 0h67.95c5.572 0 7.593.58 9.63 1.67s3.636 2.688 4.725 4.725 1.67 4.058 1.67 9.63v67.95c0 5.572-.58 7.593-1.67 9.63s-2.688 3.636-4.725 4.725-4.058 1.67-9.63 1.67h-67.95c-5.572 0-7.593-.58-9.63-1.67S2.76 95.642 1.67 93.605 0 89.548 0 83.976v-67.95c0-5.572.58-7.593 1.67-9.63S4.358 2.76 6.395 1.67 10.452 0 16.024 0z" fill="#ab6993"></path><path d="M57.98 39.967l5.413 4.398a.51.51 0 0 1-.092.847l-6.234 3.142a1.44 1.44 0 0 1-.388.124l-.136.016a1.44 1.44 0 0 1-1.031-.31c-.407-.326-.588-.842-.48-1.336l.037-.134 2.108-6.5a.51.51 0 0 1 .803-.238zm15.55-20.523a4.33 4.33 0 0 1 5.728-.648l.182.136 1.06.88a4.14 4.14 0 0 1 1.486 2.821 4.12 4.12 0 0 1-.82 2.849l-.148.184-14.9 17.566c-.36.425-.995.48-1.423.125l-5.915-4.9c-.432-.358-.5-.998-.133-1.43L73.53 19.444z" fill="#fff"></path><g stroke="#eadae4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.046"><path d="M48.012 62.483h-7.356m7.356-24.49h-7.356"></path><path d="M44.232 39.695l.004 21.566"></path></g><path d="M24 22.985c-.523 0-.954.396-1.01.905l-.006.11v52c0 .523.396.954.905 1.01l.11.006h52c.523 0 .954-.396 1.01-.905l.006-.11V42.302c0-.56-.455-1.015-1.015-1.015-.523 0-.954.396-1.01.905l-.006.11v32.682h-49.97v-49.97h34.7c.523 0 .954-.396 1.01-.905l.006-.11c0-.523-.396-.954-.905-1.01l-.11-.006H24z" fill="#fff" fill-rule="nonzero"></path><g fill="#eadae4"><rect x="18" y="18" width="12" height="12" rx="6"></rect><rect x="18" y="70" width="12" height="12" rx="6"></rect><rect x="70" y="70" width="12" height="12" rx="6"></rect></g></svg>
                </div>
                <h3>Edit PDF</h3>
                <div class="tools__item__content">
                  <p>Add text, images, shapes or freehand annotations to a PDF document. Edit the size, font, and color of the added content.</p>
                </div>
              </a>
            </div> */}

            {/* Pdf to Jpg */}

            {/* <div class="col-md-3">
              <a href="/pdf_to_jpg" title="PDF to JPG">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path d="M32.324 15.656h-9.55c-2.477 0-3.375.258-4.28.742a5.06 5.06 0 0 0-2.098 2.102c-.484.902-.742 1.8-.742 4.277v9.55H5.18c-1.8 0-2.453-.187-3.113-.54a3.69 3.69 0 0 1-1.527-1.527C.188 29.598 0 28.945 0 27.145V5.18c0-1.8.188-2.453.54-3.113A3.69 3.69 0 0 1 2.066.539C2.727.188 3.38 0 5.18 0h21.965c1.8 0 2.453.188 3.113.54a3.69 3.69 0 0 1 1.527 1.527c.352.66.54 1.313.54 3.113zm0 0" fill-rule="evenodd" fill="rgb(98.431373%,93.72549%,65.882353%)"></path><path d="M14.477 7.52c0-.477-.395-.863-.883-.863s-.883.387-.883.863v3.844L7.566 6.316a.89.89 0 0 0-1.246 0c-.168.16-.258.38-.258.61s.1.453.258.613l5.145 5.05H7.55c-.488 0-.883.387-.883.867s.395.863.883.863h6.047a.85.85 0 0 0 .34-.066c.215-.086.387-.254.477-.47.05-.102.066-.215.066-.328l.004-5.934zm0 0" fill="rgb(71.764706%,62.745098%,0.392157%)"></path><g fill-rule="evenodd"><path d="M22.855 17.676H44.82c1.8 0 2.453.188 3.113.543.648.344 1.184.875 1.527 1.527.352.656.54 1.31.54 3.11V44.82c0 1.8-.187 2.453-.54 3.113a3.69 3.69 0 0 1-1.527 1.527c-.66.352-1.312.54-3.113.54H22.855c-1.8 0-2.453-.187-3.113-.54-.648-.344-1.18-.88-1.527-1.527-.352-.66-.54-1.312-.54-3.113V22.855c0-1.8.188-2.453.54-3.113.348-.648.88-1.18 1.527-1.527.66-.352 1.313-.54 3.113-.54zm0 0" fill="rgb(83.921569%,74.901961%,17.647059%)"></path><path d="M41.5 26c1.102 0 2 .898 2 2s-.898 2-2 2-2-.898-2-2 .898-2 2-2zM30.6 39h-6.344c-.1 0-.172-.047-.215-.125s-.043-.168.004-.242l6.574-11.02a.26.26 0 0 1 .426 0l3.832 6.422 2.57-2.625c.047-.05.11-.074.176-.074h.008c.07 0 .137.03.18.086l6.1 7.13c.07.043.11.12.11.203 0 .133-.113.242-.246.242H30.6v-.004zm0 0" fill="rgb(100%,100%,100%)"></path></g></svg>
                </div>
                <h3>PDF to JPG</h3>
                <div class="tools__item__content">
                  <p>Convert each PDF page into a JPG or extract all images contained in a PDF.</p>
                </div>
              </a>
            </div> */}

            {/* Jpg to Pdf */}
            {/* <div class="col-md-3">
              <a href="/jpg_to_pdf" title="JPG to PDF">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path d="M17.676 34.344h9.55c2.477 0 3.375-.258 4.28-.742a5.04 5.04 0 0 0 2.098-2.102c.484-.902.742-1.8.742-4.277v-9.547H44.82c1.8 0 2.453.188 3.113.54s1.176.87 1.527 1.527.54 1.31.54 3.113V44.82c0 1.8-.187 2.453-.54 3.113a3.69 3.69 0 0 1-1.527 1.527c-.66.352-1.312.54-3.113.54H22.855c-1.8 0-2.453-.187-3.113-.54s-1.172-.87-1.527-1.527-.54-1.312-.54-3.113zm0 0" fill-rule="evenodd" fill="rgb(98.431373%,93.72549%,65.882353%)"></path><path d="M43.94 37.137c0-.477-.395-.863-.883-.863s-.883.387-.883.863v3.844l-5.145-5.047c-.348-.34-.902-.34-1.25 0a.85.85 0 0 0-.258.609.86.86 0 0 0 .258.613l5.145 5.05h-3.914c-.488 0-.883.387-.883.867s.395.867.883.867h6.05c.113-.004.227-.023.336-.07a.87.87 0 0 0 .477-.465c.05-.105.066-.22.066-.332l.004-5.934zm0 0" fill="rgb(71.764706%,62.745098%,0.392157%)"></path><g fill-rule="evenodd"><path d="M5.184 0h21.988c1.8 0 2.453.188 3.113.54.652.344 1.184.88 1.527 1.53.352.656.54 1.313.54 3.113v21.984c0 1.805-.187 2.457-.54 3.117-.344.648-.875 1.184-1.527 1.527-.66.352-1.312.54-3.113.54H5.184c-1.8 0-2.457-.187-3.113-.54-.652-.344-1.184-.88-1.527-1.527C.188 29.625 0 28.973 0 27.168V5.184c0-1.8.188-2.457.54-3.113.344-.652.88-1.184 1.53-1.53S3.383 0 5.184 0zm0 0" fill="rgb(83.921569%,74.901961%,17.647059%)"></path><path d="M10.28 12.945v4.688c0 1.66-.926 2.66-2.707 2.66C5.406 20.293 5 18.852 5 18.07c0-.668.31-1.098.86-1.098.648 0 .813.504.813 1.05 0 .516.242.89.88.89.594 0 .926-.44.926-1.3V12.95c0-.54.352-.898.902-.898s.902.36.902.898zm1.672 6.402v-6.102c0-.8.418-1.055 1.055-1.055h2.762c1.516 0 2.738.75 2.738 2.508 0 1.44-1 2.508-2.75 2.508h-2v2.152c0 .54-.355.902-.902.902s-.902-.363-.902-.902zm1.805-5.773v2.242h1.68c.727 0 1.266-.437 1.266-1.12 0-.793-.56-1.12-1.45-1.12zm13.285 3.1v2.984c0 .332-.254.602-.613.602-.52 0-.66-.32-.773-1.023-.516.648-1.23 1.066-2.352 1.066-2.793 0-3.863-1.926-3.863-4.145 0-2.676 1.672-4.148 4.125-4.148 2.004 0 3.07 1.2 3.07 1.902 0 .63-.46.793-.848.793-.89 0-.56-1.242-2.32-1.242-1.242 0-2.223.813-2.223 2.816 0 1.56.77 2.637 2.246 2.637.957 0 1.793-.648 1.88-1.617H24.2c-.383 0-.812-.14-.812-.69 0-.44.254-.69.703-.69h2.223c.527 0 .738.262.738.758zm0 0" fill="rgb(100%,100%,100%)"></path></g></svg>
                </div>
                <h3>JPG to PDF</h3>
                <div class="tools__item__content">
                  <p>Convert JPG images to PDF in seconds. Easily adjust orientation and margins.</p>
                </div>
              </a>
            </div> */}

          </div>
          <div className="row">
            {/* Page Numbers */}
            {/* <div class="col-md-3">
              <a href="/add_pdf_page_number" title="Page numbers">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill-rule="evenodd"><path d="M31.523 28h14.953c1.223 0 1.668.13 2.117.367.44.234.805.598 1.04 1.04.242.45.367.895.367 2.117v14.953c0 1.223-.13 1.668-.367 2.117-.234.44-.598.805-1.04 1.04-.45.242-.895.367-2.117.367H31.523c-1.223 0-1.668-.13-2.117-.367-.44-.234-.805-.598-1.04-1.04-.242-.45-.367-.895-.367-2.117V31.523c0-1.223.13-1.668.367-2.117.234-.44.598-.805 1.04-1.04.45-.242.895-.367 2.117-.367zm0-28h14.953c1.223 0 1.668.13 2.117.367.44.234.805.598 1.04 1.04.242.45.367.895.367 2.117v14.953c0 1.223-.13 1.668-.367 2.117-.234.44-.598.805-1.04 1.04-.45.242-.895.367-2.117.367H31.523c-1.223 0-1.668-.13-2.117-.367-.44-.234-.805-.598-1.04-1.04-.242-.45-.367-.895-.367-2.117V3.523c0-1.223.13-1.668.367-2.117.234-.44.598-.805 1.04-1.04C29.855.125 30.3 0 31.523 0zm-28 28h14.953c1.223 0 1.668.13 2.117.367.44.234.805.598 1.04 1.04.242.45.367.895.367 2.117v14.953c0 1.223-.13 1.668-.367 2.117-.234.44-.598.805-1.04 1.04-.45.242-.895.367-2.117.367H3.523c-1.223 0-1.668-.13-2.117-.367-.44-.234-.805-.598-1.04-1.04C.125 48.145 0 47.7 0 46.477V31.523c0-1.223.13-1.668.367-2.117.234-.44.598-.805 1.04-1.04.45-.242.895-.367 2.117-.367zm0-28h14.953c1.223 0 1.668.13 2.117.367.44.234.805.598 1.04 1.04.242.45.367.895.367 2.117v14.953c0 1.223-.13 1.668-.367 2.117-.234.44-.598.805-1.04 1.04-.45.242-.895.367-2.117.367H3.523c-1.223 0-1.668-.13-2.117-.367-.44-.234-.805-.598-1.04-1.04C.125 20.145 0 19.7 0 18.477V3.523C0 2.3.13 1.852.367 1.406A2.56 2.56 0 0 1 1.406.367C1.855.13 2.3 0 3.523 0zm0 0" fill="rgb(67.058824%,41.176471%,57.647059%)"></path><path d="M10.34 14.27v-4.94H8.664c-.43 0-.664-.156-.664-.687 0-.484.262-.613.938-.742l.48-.105C10.86 7.48 10.457 6 11.566 6c.418 0 .754.184.754.883v7.387c0 .676-.258 1.14-.988 1.14s-.988-.465-.988-1.14zm27.31-.668h3.902c.492 0 .855.234.855.816s-.363.82-.96.82H36.57c-.754 0-1.066-.508-1.066-.96 0-.926.82-1.953 2.445-2.977 1.81-1.145 2.43-1.38 2.43-2.434 0-.848-.648-1.313-1.363-1.313-.832 0-1.39.34-1.676 1.38-.133.48-.3.727-.82.727-.535 0-.95-.22-.95-.87 0-1.586 1.56-2.8 3.47-2.8 2.082 0 3.316 1.367 3.316 2.563 0 1.73-.793 2.398-2.172 3.184-1.47.832-2.363 1.367-2.535 1.86zM7.5 41.664a.88.88 0 0 1 .922-.91c1.156 0 .535 1.598 2.328 1.598.977 0 1.5-.598 1.5-1.402 0-.625-.273-1.082-1.172-1.172-.363-.04-1.078-.102-1.078-.703 0-.676.39-.816 1.133-.855.648-.04.988-.418.988-1.016 0-.777-.613-1.145-1.3-1.145-1.574 0-1.21 1.484-2.234 1.484-.445 0-.87-.2-.87-.78 0-1.586 1.883-2.262 3.145-2.262 2.25 0 3.082 1.262 3.082 2.523 0 .832-.38 1.43-1.102 1.82.977.27 1.39 1.05 1.39 2.027 0 2.055-1.586 3.04-3.508 3.04-2.445 0-3.21-1.52-3.21-2.246zm31.75-1.484v-3.367h-.023l-2.512 3.367zm0 2.824v-1.34h-3.262c-.676 0-.988-.48-.988-.898 0-.336.078-.547.246-.766l4.004-5.137c.2-.258.48-.363.852-.363.703 0 .973.38.973.938v4.75h.652c.44 0 .727.31.727.738s-.285.742-.727.742h-.652v1.34c0 .547-.23.9-.9.9s-.906-.363-.906-.9zm0 0" fill="rgb(100%,100%,100%)"></path></svg>
                </div>
                <h3>Page numbers</h3>
                <div class="tools__item__content">
                  <p>Add page numbers into PDFs with ease. Choose your positions, dimensions, typography.</p>
                </div>
              </a>
            </div> */}

            {/* Watermark */}
            {/* <div class="col-md-3">
              <a href="/add_pdf_page_number" title="Page numbers">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill-rule="evenodd"><path d="M31.523 28h14.953c1.223 0 1.668.13 2.117.367.44.234.805.598 1.04 1.04.242.45.367.895.367 2.117v14.953c0 1.223-.13 1.668-.367 2.117-.234.44-.598.805-1.04 1.04-.45.242-.895.367-2.117.367H31.523c-1.223 0-1.668-.13-2.117-.367-.44-.234-.805-.598-1.04-1.04-.242-.45-.367-.895-.367-2.117V31.523c0-1.223.13-1.668.367-2.117.234-.44.598-.805 1.04-1.04.45-.242.895-.367 2.117-.367zm0-28h14.953c1.223 0 1.668.13 2.117.367.44.234.805.598 1.04 1.04.242.45.367.895.367 2.117v14.953c0 1.223-.13 1.668-.367 2.117-.234.44-.598.805-1.04 1.04-.45.242-.895.367-2.117.367H31.523c-1.223 0-1.668-.13-2.117-.367-.44-.234-.805-.598-1.04-1.04-.242-.45-.367-.895-.367-2.117V3.523c0-1.223.13-1.668.367-2.117.234-.44.598-.805 1.04-1.04C29.855.125 30.3 0 31.523 0zm-28 28h14.953c1.223 0 1.668.13 2.117.367.44.234.805.598 1.04 1.04.242.45.367.895.367 2.117v14.953c0 1.223-.13 1.668-.367 2.117-.234.44-.598.805-1.04 1.04-.45.242-.895.367-2.117.367H3.523c-1.223 0-1.668-.13-2.117-.367-.44-.234-.805-.598-1.04-1.04C.125 48.145 0 47.7 0 46.477V31.523c0-1.223.13-1.668.367-2.117.234-.44.598-.805 1.04-1.04.45-.242.895-.367 2.117-.367zm0-28h14.953c1.223 0 1.668.13 2.117.367.44.234.805.598 1.04 1.04.242.45.367.895.367 2.117v14.953c0 1.223-.13 1.668-.367 2.117-.234.44-.598.805-1.04 1.04-.45.242-.895.367-2.117.367H3.523c-1.223 0-1.668-.13-2.117-.367-.44-.234-.805-.598-1.04-1.04C.125 20.145 0 19.7 0 18.477V3.523C0 2.3.13 1.852.367 1.406A2.56 2.56 0 0 1 1.406.367C1.855.13 2.3 0 3.523 0zm0 0" fill="rgb(67.058824%,41.176471%,57.647059%)"></path><path d="M10.34 14.27v-4.94H8.664c-.43 0-.664-.156-.664-.687 0-.484.262-.613.938-.742l.48-.105C10.86 7.48 10.457 6 11.566 6c.418 0 .754.184.754.883v7.387c0 .676-.258 1.14-.988 1.14s-.988-.465-.988-1.14zm27.31-.668h3.902c.492 0 .855.234.855.816s-.363.82-.96.82H36.57c-.754 0-1.066-.508-1.066-.96 0-.926.82-1.953 2.445-2.977 1.81-1.145 2.43-1.38 2.43-2.434 0-.848-.648-1.313-1.363-1.313-.832 0-1.39.34-1.676 1.38-.133.48-.3.727-.82.727-.535 0-.95-.22-.95-.87 0-1.586 1.56-2.8 3.47-2.8 2.082 0 3.316 1.367 3.316 2.563 0 1.73-.793 2.398-2.172 3.184-1.47.832-2.363 1.367-2.535 1.86zM7.5 41.664a.88.88 0 0 1 .922-.91c1.156 0 .535 1.598 2.328 1.598.977 0 1.5-.598 1.5-1.402 0-.625-.273-1.082-1.172-1.172-.363-.04-1.078-.102-1.078-.703 0-.676.39-.816 1.133-.855.648-.04.988-.418.988-1.016 0-.777-.613-1.145-1.3-1.145-1.574 0-1.21 1.484-2.234 1.484-.445 0-.87-.2-.87-.78 0-1.586 1.883-2.262 3.145-2.262 2.25 0 3.082 1.262 3.082 2.523 0 .832-.38 1.43-1.102 1.82.977.27 1.39 1.05 1.39 2.027 0 2.055-1.586 3.04-3.508 3.04-2.445 0-3.21-1.52-3.21-2.246zm31.75-1.484v-3.367h-.023l-2.512 3.367zm0 2.824v-1.34h-3.262c-.676 0-.988-.48-.988-.898 0-.336.078-.547.246-.766l4.004-5.137c.2-.258.48-.363.852-.363.703 0 .973.38.973.938v4.75h.652c.44 0 .727.31.727.738s-.285.742-.727.742h-.652v1.34c0 .547-.23.9-.9.9s-.906-.363-.906-.9zm0 0" fill="rgb(100%,100%,100%)"></path></svg>
                </div>
                <h3>Page numbers</h3>
                <div class="tools__item__content">
                  <p>Add page numbers into PDFs with ease. Choose your positions, dimensions, typography.</p>
                </div>
              </a>
            </div> */}

            {/* Rotate Pdf */}
            {/* <div class="col-md-3">
              <a href="/rotate_pdf" title="Rotate PDF">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill-rule="evenodd"><path d="M8.012 0h33.976c2.786 0 3.796.3 4.815.835a5.68 5.68 0 0 1 2.363 2.363c.545 1.02.835 2.03.835 4.815v33.976c0 2.786-.3 3.796-.835 4.815a5.68 5.68 0 0 1-2.363 2.363c-1.02.545-2.03.835-4.815.835H8.012c-2.786 0-3.796-.3-4.815-.835a5.68 5.68 0 0 1-2.363-2.363C.3 45.784 0 44.774 0 41.988V8.012c0-2.786.3-3.796.835-4.815A5.68 5.68 0 0 1 3.197.835C4.216.3 5.226 0 8.012 0z" fill="#AB6993"></path><g fill="#FFF"><path d="M23.366 13.26a1.25 1.25 0 1 1 .318 2.48c-5.352.686-9.434 5.212-9.434 10.638 0 4.407 2.692 8.285 6.726 9.926a1.25 1.25 0 0 1-.942 2.316c-4.963-2.02-8.284-6.804-8.284-12.242 0-6.697 5.03-12.273 11.616-13.118zm14.778 11.437a1.25 1.25 0 1 1-2.475.354 11.6 11.6 0 0 0-.905-3.163 1.25 1.25 0 1 1 2.278-1.03c.545 1.205.908 2.482 1.102 3.84zM26.71 39.493a1.25 1.25 0 0 1-.354-2.475c1.1-.157 2.125-.445 3.09-.872a1.25 1.25 0 0 1 1.013 2.286c-1.178.522-2.425.872-3.748 1.06zm8.792-4.998a1.25 1.25 0 1 1-2-1.5c.718-.957 1.262-1.91 1.627-2.866a1.25 1.25 0 1 1 2.335.893C37 32.206 36.35 33.36 35.5 34.495z" fill-rule="nonzero"></path><path d="M24.282 21c-.427 0-.78-.354-.78-.78V9.28c0-.427.354-.78.78-.78.208 0 .403.085.55.232l5.47 5.47c.146.146.232.342.232.55s-.085.403-.232.55l-5.47 5.47c-.146.146-.342.232-.55.232z"></path></g></svg>
                </div>
                <h3>Rotate PDF</h3>
                <div class="tools__item__content">
                  <p>Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!</p>
                </div>
              </a>
            </div> */}

            {/* Html to Pdf */}
            {/* <div class="col-md-3">
              <a href="/html-to-pdf" title="HTML to PDF">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" fill-rule="evenodd"><path d="M35.354 68.687h19.1c4.953 0 6.75-.516 8.56-1.484s3.232-2.39 4.2-4.2 1.484-3.607 1.484-8.56v-19.1H89.64c3.602 0 4.908.375 6.225 1.08a7.34 7.34 0 0 1 3.055 3.055c.704 1.317 1.08 2.623 1.08 6.225V89.64c0 3.602-.375 4.908-1.08 6.225a7.34 7.34 0 0 1-3.055 3.055c-1.317.704-2.623 1.08-6.225 1.08H45.713c-3.602 0-4.908-.375-6.225-1.08a7.34 7.34 0 0 1-3.055-3.055c-.704-1.317-1.08-2.623-1.08-6.225V68.687z" fill="#fbefa8"></path><path d="M87.88 74.277c0-.957-.79-1.733-1.766-1.733s-1.766.776-1.766 1.733v7.686L74.06 71.864a1.79 1.79 0 0 0-2.496 0 1.71 1.71 0 0 0 0 2.45L81.85 84.413h-7.828c-.976 0-1.766.776-1.766 1.733s.79 1.733 1.766 1.733h12.1a1.81 1.81 0 0 0 .674-.133c.43-.175.776-.513.954-.937.1-.21.136-.436.136-.66l.002-11.87z" fill="#b7a001" fill-rule="nonzero"></path><path d="M10.36 0h43.928c3.602 0 4.908.375 6.225 1.08a7.34 7.34 0 0 1 3.055 3.055c.704 1.317 1.08 2.623 1.08 6.225v43.928c0 3.602-.375 4.908-1.08 6.225a7.34 7.34 0 0 1-3.055 3.055c-1.317.704-2.623 1.08-6.225 1.08H10.36c-3.602 0-4.908-.375-6.225-1.08a7.34 7.34 0 0 1-3.055-3.055C.375 59.196 0 57.89 0 54.287V10.36C0 6.757.375 5.45 1.08 4.134a7.34 7.34 0 0 1 3.055-3.055C5.45.375 6.757 0 10.36 0z" fill="#d6bf2d"></path><path d="M6.444 37.69V26.63c0-.93.608-1.558 1.558-1.558S9.56 25.7 9.56 26.63v3.876h5.662V26.63c0-.93.608-1.558 1.558-1.558s1.558.627 1.558 1.558V37.69c0 .93-.608 1.558-1.558 1.558s-1.558-.627-1.558-1.558v-4.56H9.56v4.56c0 .93-.608 1.558-1.558 1.558s-1.558-.627-1.558-1.558zm18.126 0v-9.747h-2.945c-.893 0-1.615-.456-1.615-1.31s.722-1.31 1.615-1.31h9.006c.893 0 1.615.456 1.615 1.31s-.722 1.31-1.615 1.31h-2.945v9.747c0 .93-.608 1.558-1.558 1.558s-1.558-.627-1.558-1.558zm9.29.038V26.612c0-1.254.855-1.54 1.69-1.54h.912c.97 0 1.425.38 1.748 1.425l2.717 8.778h.038l2.68-8.778c.323-1.045.78-1.425 1.748-1.425h.874c.836 0 1.69.285 1.69 1.54v11.115c0 .78-.38 1.52-1.387 1.52s-1.387-.74-1.387-1.52v-8.474h-.038l-2.907 9.082c-.21.646-.684.912-1.33.912s-1.12-.266-1.33-.912l-2.907-9.082h-.038v8.474c0 .78-.38 1.52-1.387 1.52s-1.387-.74-1.387-1.52zm16.93-.55V26.63c0-.93.608-1.558 1.558-1.558s1.558.627 1.558 1.558v9.747h5.206c.893 0 1.615.456 1.615 1.31S60.005 39 59.112 39h-6.498c-1.102 0-1.824-.437-1.824-1.824z" fill="#fff" fill-rule="nonzero"></path></svg>
                </div>
                <h3>HTML to PDF</h3>
                <div class="tools__item__content">
                  <p>Convert webpages in HTML to PDF. Copy and paste the URL of the page you want and convert it to PDF with a click.</p>
                </div>
              </a>
            </div> */}

          </div>
          <div className="row">
            {/* Unlock Pdf */}
            {/* <div class="col-md-3">
              <a href="/unlock_pdf" title="Unlock PDF">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" fill-rule="evenodd"><path d="M16.024 0h67.95c5.572 0 7.593.58 9.63 1.67s3.636 2.688 4.725 4.725 1.67 4.058 1.67 9.63v67.95c0 5.572-.58 7.593-1.67 9.63s-2.688 3.636-4.725 4.725-4.058 1.67-9.63 1.67h-67.95c-5.572 0-7.593-.58-9.63-1.67S2.76 95.642 1.67 93.605 0 89.548 0 83.976v-67.95c0-5.572.58-7.593 1.67-9.63S4.358 2.76 6.395 1.67 10.452 0 16.024 0z" fill="#4a7aab"></path><path d="M70.607 44.156h-30.35l.033-10.502c.18-2.232 1.377-4.486 3.2-6.03 1.898-1.603 4.092-2.37 6.652-2.344a12.07 12.07 0 0 1 .91.043c4.586.37 8.4 4.088 8.68 8.466.03.43.014.8-.005 1.636l-.05 2.586a2.64 2.64 0 0 0 2.602 2.678c1.482-.012 2.657-1.145 2.678-2.602l.048-2.54c.023-.992.034-1.492-.004-2.1-.447-6.933-6.39-12.815-13.527-13.4-.43-.034-.858-.054-1.28-.06h-.183c-3.77 0-7.11 1.208-9.933 3.593-2.873 2.432-4.763 6.035-5.053 9.633-.02.225-.074.925-.05 10.93h-5.582c-.77 0-1.393.625-1.393 1.393v29.525c0 .77.625 1.393 1.393 1.393h41.214c.77 0 1.393-.625 1.393-1.393V45.55c0-.77-.623-1.393-1.393-1.393zM53.415 68.06h-6.83l1.043-8.468c-1.006-.707-1.66-1.85-1.66-3.14 0-2.145 1.805-3.884 4.033-3.884s4.033 1.74 4.033 3.884c0 1.3-.653 2.434-1.66 3.14l1.042 8.468z" fill="#fff" fill-rule="nonzero"></path></svg>
                </div>
                <h3>Unlock PDF</h3>
                <div class="tools__item__content">
                  <p>Remove PDF password security, giving you the freedom to use your PDFs as you want.</p>
                </div>
              </a>
            </div> */}

            {/* Protect Pdf */}

            {/* <div class="col-md-3">
              <a href="/protect-pdf" title="Protect PDF">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100"><path d="M16.024 0h67.95c5.572 0 7.593.58 9.63 1.67s3.636 2.688 4.725 4.725 1.67 4.058 1.67 9.63v67.95c0 5.572-.58 7.593-1.67 9.63s-2.688 3.636-4.725 4.725-4.058 1.67-9.63 1.67h-67.95c-5.572 0-7.593-.58-9.63-1.67S2.76 95.642 1.67 93.605 0 89.548 0 83.976v-67.95c0-5.572.58-7.593 1.67-9.63S4.358 2.76 6.395 1.67 10.452 0 16.024 0z" fill="#4A7AAB"></path><g fill="#fff"><path d="M49.485 21.715a2.5 2.5 0 0 1 2.031 0l21.5 9.556a2.5 2.5 0 0 1 1.485 2.285V47.89c0 14.445-10 27.82-23.407 31.095a2.5 2.5 0 0 1-1.186 0C36.5 75.708 26.5 62.334 26.5 47.89V33.556a2.5 2.5 0 0 1 1.485-2.285l21.5-9.556zM31.5 35.18v12.71c0 11.97 8.165 23.116 19 26.084 10.835-2.968 19-14.113 19-26.084V35.18l-19-8.444-19 8.444z" fill-rule="nonzero"></path><path d="M53.89 58.493h-7.713l1.178-9.56c-1.136-.798-1.874-2.088-1.874-3.546 0-2.422 2.038-4.386 4.553-4.386s4.553 1.964 4.553 4.386c0 1.457-.738 2.748-1.874 3.546l1.176 9.56z"></path></g></svg>
                </div>
                <h3>Protect PDF</h3>
                <div class="tools__item__content">
                  <p>Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access. </p>
                </div>
              </a>
            </div> */}

            {/* Organize pdf */}
            {/* <div class="col-md-3">
              <a href="/organize-pdf" title="Organize PDF">
                <div className="tools__label">

                </div>
                <h3>Organize PDF</h3>
                <div class="tools__item__content">
                  <p>Sort pages of your PDF file however you like. Delete PDF pages or add PDF pages to your document at your convenience.</p>
                </div>
              </a>
            </div> */}

            {/* Pdf to Pdf/A */}
            {/* <div class="col-md-3">
              <a href="/convert-pdf-to-pdfa" title="PDF to PDF/A">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" fill-rule="evenodd"><path d="M64.706 31.342H45.6c-4.957 0-6.755.516-8.567 1.485s-3.235 2.392-4.204 4.204-1.485 3.6-1.485 8.567v19.107H10.37c-3.605 0-4.913-.375-6.23-1.08a7.35 7.35 0 0 1-3.057-3.057C.375 59.25 0 57.943 0 54.337V10.37c0-3.605.375-4.913 1.08-6.23A7.35 7.35 0 0 1 4.138 1.08C5.456.375 6.763 0 10.37 0h43.97c3.605 0 4.913.375 6.23 1.08a7.35 7.35 0 0 1 3.057 3.057c.705 1.318 1.08 2.625 1.08 6.23v20.973z" fill="#c0cfe1"></path><path d="M27.94 14.624c0-.937-.758-1.697-1.697-1.697s-1.697.76-1.697 1.697v7.525l-9.887-9.887c-.663-.663-1.736-.663-2.4 0s-.663 1.736 0 2.4l9.887 9.887h-7.523c-.938 0-1.697.76-1.697 1.697s.758 1.697 1.697 1.697h11.62a1.71 1.71 0 0 0 .647-.131c.415-.17.746-.503.917-.917.086-.206.13-.427.13-.647V14.624z" fill="#204160" fill-rule="nonzero"></path><path d="M45.663 35.294h43.97c3.605 0 4.913.375 6.23 1.08a7.35 7.35 0 0 1 3.057 3.057c.705 1.318 1.08 2.625 1.08 6.23v43.97c0 3.605-.375 4.913-1.08 6.23a7.35 7.35 0 0 1-3.057 3.057c-1.318.705-2.625 1.08-6.23 1.08h-43.97c-3.605 0-4.913-.375-6.23-1.08a7.35 7.35 0 0 1-3.057-3.057c-.705-1.318-1.08-2.625-1.08-6.23v-43.97c0-3.605.375-4.913 1.08-6.23a7.35 7.35 0 0 1 3.057-3.057c1.318-.705 2.625-1.08 6.23-1.08z" fill="#4A7AAB"></path><path d="M49.288 78.12l8.604-22.644c.216-.576.576-1.476 1.98-1.476.828 0 1.872.684 1.872 1.836 0 .396-.144.792-.288 1.188l-8.604 22.644c-.216.576-.576 1.476-1.98 1.476-.828 0-1.872-.684-1.872-1.836 0-.396.144-.792.288-1.188zm14.415-1.98l7.632-20.196c.504-1.332 1.44-1.8 2.88-1.8h1.404c1.332 0 2.52.324 3.168 2.16l7.128 19.836c.216.576.576 1.62.576 2.268 0 1.44-1.26 2.592-2.772 2.592-1.296 0-2.232-.468-2.664-1.62l-1.512-4.32H70.04l-1.548 4.32c-.396 1.152-1.224 1.62-2.628 1.62-1.62 0-2.736-1.008-2.736-2.592 0-.648.36-1.692.576-2.268zm14.544-5.184L74.9 60.552h-.072l-3.492 10.404h6.912z" fill="#fff"></path></svg>
                </div>
                <h3>PDF to PDF/A</h3>
                <div class="tools__item__content">
                  <p>Transform your PDF to PDF/A, the ISO-standardized version of PDF for long-term archiving. Your PDF will preserve formatting when accessed in the future.</p>
                </div>
              </a>
            </div> */}
          </div>
          <div className="row">
            {/* Repair Pdf */}
            {/* <div class="col-md-3">
              <a href="/repair-pdf" title="Repair PDF">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill-rule="evenodd"><path d="M8.012 0h33.977c2.785 0 3.797.29 4.816.836 1.004.53 1.828 1.355 2.36 2.363.547 1.016.836 2.027.836 4.813v33.977c0 2.785-.29 3.797-.836 4.816-.53 1.004-1.355 1.828-2.36 2.36-1.02.547-2.03.836-4.816.836H8.012c-2.785 0-3.797-.29-4.816-.836-1.004-.53-1.828-1.355-2.36-2.36C.29 45.785 0 44.773 0 41.988V8.012c0-2.785.29-3.797.836-4.816C1.367 2.19 2.19 1.367 3.2.836 4.215.29 5.227 0 8.012 0zm0 0" fill="rgb(56.078431%,73.72549%,36.470588%)"></path><path d="M20.816 27.363c.117.098.184.242.18.39 0 .12-.04.234-.113.324l-6.563 7.906a.51.51 0 0 1-.715.063.52.52 0 0 1-.18-.391c0-.12.043-.234.117-.328l6.56-7.902c.086-.102.207-.168.34-.18s.27.03.37.117zm2.13 1.793a.51.51 0 0 1 .066.715l-6.562 7.906c-.086.102-.207.168-.344.18a.5.5 0 0 1-.367-.117.52.52 0 0 1-.18-.391c0-.12.04-.234.117-.328l6.56-7.902c.086-.102.21-.168.344-.18s.266.03.37.117zm-10.816 5.31c-.957 1.156-.805 2.89.344 3.86l1.238 1.043a2.72 2.72 0 0 0 3.836-.352l6.953-8.367L19.988 25zm21.13-18.527a4.4 4.4 0 0 1 1.32-1.062l.313-.16c.387-.203.723-.473.996-.8l1.04-1.25c.137-.164.078-.44-.13-.613l-1.69-1.418c-.21-.176-.488-.184-.625-.02l-1.04 1.25a3.31 3.31 0 0 0-.609 1.125l-.102.336a4.32 4.32 0 0 1-.805 1.492L26.5 21.32l1.29 1.18zm3.082 21.637c-.355.328-.824.504-1.305.484a1.81 1.81 0 0 1-1.262-.578c-.684-.738-.64-1.89.094-2.574a1.8 1.8 0 0 1 1.301-.484 1.81 1.81 0 0 1 1.266.578c.68.738.637 1.89-.094 2.574M24.1 20.996c-.906-.848-1.36-2.1-1.156-3.316.29-1.777-.21-3.668-1.527-5.094-1.293-1.398-3.1-2.035-4.852-1.906-.312.023-.46.398-.246.63l2.742 2.965a1.46 1.46 0 0 1-.074 2.051l-2.492 2.324c-.28.262-.656.402-1.04.387a1.44 1.44 0 0 1-1.008-.461l-2.734-2.953c-.098-.105-.25-.148-.387-.102a.37.37 0 0 0-.262.305c-.25 1.773.273 3.648 1.6 5.035a6.01 6.01 0 0 0 4.836 1.852c1.234-.102 2.438.434 3.215 1.398L32.5 38.828c1.38 1.484 3.7 1.566 5.18.19s1.563-3.72.19-5.2zm0 0" fill="rgb(100%,100%,100%)"></path></svg>
                </div>
                <h3>Repair PDF</h3>
                <div class="tools__item__content">
                  <p>Repair a damaged PDF and recover data from corrupt PDF. Fix PDF files with our Repair tool.</p>
                </div>
              </a>
            </div> */}

            {/* Sign Pdf */}
            {/* <div class="col-md-3">
              <div class="badge badge--new">New!</div>
              <a href="/sign-pdf" title="Sign PDF">
                <div className="tools__label">
                  <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 100 100"><g fill="none"><path d="M16 0L84 0C89.5 0 91.6 0.6 93.6 1.7 95.6 2.8 97.2 4.4 98.3 6.4 99.4 8.4 100 10.5 100 16L100 84C100 89.5 99.4 91.6 98.3 93.6 97.2 95.6 95.6 97.2 93.6 98.3 91.6 99.4 89.5 100 84 100L16 100C10.5 100 8.4 99.4 6.4 98.3 4.4 97.2 2.8 95.6 1.7 93.6 0.6 91.6 0 89.5 0 84L0 16C0 10.5 0.6 8.4 1.7 6.4 2.8 4.4 4.4 2.8 6.4 1.7 8.4 0.6 10.5 0 16 0Z" fill="#AB6993"></path><path d="M16 0L84 0C89.5 0 91.6 0.6 93.6 1.7 95.6 2.8 97.2 4.4 98.3 6.4 99.4 8.4 100 10.5 100 16L100 84C100 89.5 99.4 91.6 98.3 93.6 97.2 95.6 95.6 97.2 93.6 98.3 91.6 99.4 89.5 100 84 100L16 100C10.5 100 8.4 99.4 6.4 98.3 4.4 97.2 2.8 95.6 1.7 93.6 0.6 91.6 0 89.5 0 84L0 16C0 10.5 0.6 8.4 1.7 6.4 2.8 4.4 4.4 2.8 6.4 1.7 8.4 0.6 10.5 0 16 0Z" fill="#4A7AAB"></path><g transform="translate(-371 -2828)translate(371 2828)translate(50.5 50.5)rotate(30)" fill="#FFF"><path d="M-16.2 3.8L-2.3 29.5C-2.1 29.7-1.9 29.8-1.7 29.7 -1.5 29.6-1.4 29.5-1.4 29.3L-1.4 10.6C-3.8 10-5.5 7.9-5.5 5.4 -5.5 2.5-3.1 0.1-0.2 0.1 2.8 0.1 5.2 2.5 5.2 5.4 5.2 7.9 3.4 10 1 10.6L1 29.3C1 29.5 1.2 29.7 1.5 29.7 1.6 29.7 1.8 29.6 1.9 29.5L15.8 3.8C16.2 3 16.2 2.2 15.9 1.4L8.4-15.1C8-16.1 7.1-16.7 6-16.7L-6.4-16.7C-7.5-16.7-8.4-16.1-8.9-15.1L-16.3 1.4C-16.6 2.2-16.6 3-16.2 3.8Z"></path><path d="M9-18.7L-9.4-18.7C-10.3-18.7-11.1-19.7-11.1-20.9L-11.1-28.3C-11.1-29.5-10.3-30.5-9.4-30.5L9-30.5C10-30.5 10.8-29.5 10.8-28.3L10.8-20.9C10.8-19.7 10-18.7 9-18.7Z"></path></g></g></svg>
                </div>
                <h3>Sign PDF</h3>
                <div class="tools__item__content">
                  <p>Sign a document and request signatures. Draw your signature or sign PDF files with a certificate-based digital ID.</p>
                </div>
              </a>
            </div> */}

          </div>
        </div>
      </div>

      <div className="footer">File twistter
        <div class="container">
          <div class="row ">
            <div class="col-md-3">
              <div class="title4 red">
                File Twistter
              </div>
              <ul class="footer__nav">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Features</a>
                </li>
                <li>
                  <a href="/">Pricing</a>
                </li>
                <li>
                  <a href="/">Tools</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3">
              <div class="title4 red">
                Products
              </div>
              <ul class="footer__nav">
                <li>
                  <a href="/">File Twistter Desktop</a>
                </li>
                <li>
                  <a href="/">File Twistter Mobile</a>
                </li>
                <li>
                  <a href="/">Developers</a>
                </li>
                <li>
                  <a href="/">WordPress Plugin</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3">
              <div class="title4 red">
                Solutions
              </div>
              <ul class="footer__nav">
                <li>
                  <a href="/">Business</a>
                </li>
                <li>
                  <a href="/">Education</a>
                </li>
                <li>
                  <a href="/"></a>
                </li>
                <li>
                  <a href="/"></a>
                </li>
                <li>
                  <a href="/"></a>
                </li>
              </ul>
            </div>

            <div class="col-md-3">
              <div class="title4 red">
                COMPANY
              </div>
              <ul class="footer__nav">
                <li>
                  <a href="/">Our Story</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Press</a>
                </li>
                <li>
                  <a href="/">Legal & Privacy</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="network" id="network"></div>
    </div>
  )
}