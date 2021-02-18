import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function Faq() {
    return (
      <section className=" pb-5">
        <div className="row pl-mdnav-cus mx-0">
            <div className="col-12">
                <div className="mt-4 px-3 col-sm-9">
                    <label for="question" className="text-cus-primary font-700">Question:</label>
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
                <div className="row w-100 mx-0 align-items-end">
                    <div className="mt-4 px-3 col-sm-9">
                        <label for="answer" className="text-cus-primary font-700">Answer:</label>
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
                    <div className="btn-group-cus px-3  col-sm-3 d-flex flex-column">
                        <button type="button" className="border-cus-success mt-2 font-700 text-cus-success bg-none bottom-btn-style">Cancel</button>
                        <button type="button" className="border-cus-success mt-2 bottom-btn-style text-white font-700 bg-cus-success">Save</button>
                    </div>
                    <div className="btn-group-cus px-3 mt-3 col-12 d-flex flex-column">
                        <button type="button" className="border-cus-success mt-2 bottom-btn-style text-white font-700 bg-cus-success">Add</button>
                    </div>
                </div>
                <div className="mt-4 px-3 col-sm-9">
                    <label for="question" className="text-cus-primary font-700">Question:</label>
                    <textarea name="question_field2" placeholder="Add a question here" className="w-100 area-fqa-field"></textarea>
                </div>
                <div className="row mx-0 align-items-end">
                    <div className="mt-4 px-3 col-sm-9">
                        <label for="answer" className="text-cus-primary font-700">Answer:</label>
                        <textarea rows="5" cols="10" name="question_field2" placeholder="Add a answer here" className="w-100 area-fqa-field"></textarea>
                    </div>
                    <div className="btn-group-cus px-3  col-sm-3 d-flex flex-column">
                        <button type="button" className="border-cus-success mt-2 font-700 text-cus-success bg-none bottom-btn-style">Cancel</button>
                        <button type="button" className="border-cus-success mt-2 bottom-btn-style text-white font-700 bg-cus-success">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Faq;