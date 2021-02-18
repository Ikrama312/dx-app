import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function About_us() {
    return (
      <section className=" pb-5">
        <div className="row pl-mdnav-cus mx-0">
            <div className="col-12">
                <div class="chat-header col-12">
                    <h3 class="text-cus-primary pt-4 px-3">About Us</h3>
                    <div class="mt-4 px-3">
                        <CKEditor 
                            editor={ ClassicEditor }
                            data=""
                            onReady={ editor => {
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                console.log( { event, editor, data } );
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                    </div>
                    <div class="btn-group-cus px-3 text-right">
                        <button type="button" class="border-cus-success mr-3 font-700 text-cus-success bg-none bottom-btn-style">Cancel</button>
                        <button type="button" class="border-cus-success bottom-btn-style text-white font-700 bg-cus-success">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default About_us;