import React from 'react';
import user_avatar from '../assets/img/man_pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faTrash , faTimes , faMapMarkerAlt , faPlus , faSmile , faCheck } from '@fortawesome/free-solid-svg-icons';
function Messages() {
    return (
      <section className=" pb-5">
        <div className="row pl-mdnav-cus mx-0">
                <div className="chat-header col-12">
                    <h3 className="text-cus-primary pt-4">Messages</h3>
                </div>
                <div className="col-md-5">
                    <div className="message-box">
                        <div className="custom-card mt-3 bg-white">
                            <div className="card-cus-header text-center bg-cus-primary text-white">
                            <p className="mb-0">Messages</p>
                            </div>
                            <div className="users-messages border-bottom px-2 pt-2 pb-3 position-relative">
                                <div className="d-flex flex-wrap  chat-user-box">
                                    <div className="messager-avatar ">
                                        <img className="rounded-circle" src={user_avatar} width="70px" height="70px" />
                                    </div>
                                    <div className="messager-detail pl-3">
                                        <h6 className="mb-0 text-cus-primary">John Doe</h6>
                                        <span className="mb-0 text-cus-primary messager-state">California , USA</span>
                                        <p className="messager-last mb-0">lurem ipsum user text for testing</p>
                                    </div>
                                </div>
                                <p className="message-time ml-auto d-contents w-100 mb-0 text-right">Saturday, sep 12, 2020 </p>
                                <div className="user-mess-action">
                                    <button type="button" className="bg-transparent border-0 px-0"><span className="bg-cus-danger rounded-circle action-btn mr-1"><FontAwesomeIcon  className="fa fa-trash text-white" icon={faTrash} /></span></button>
                                    <button type="button" className="bg-transparent border-0 px-0"><span className="border-cus-success rounded-circle action-btn"><FontAwesomeIcon  className="text-cus-success" icon={faCheck} /></span></button>
                                </div>
                            </div>
                            <div className="users-messages border-bottom px-2 pt-2 pb-3 position-relative">
                                <div className="d-flex flex-wrap  chat-user-box">
                                    <div className="messager-avatar ">
                                        <img className="rounded-circle" src={user_avatar} width="70px" height="70px" />
                                    </div>
                                    <div className="messager-detail pl-3">
                                        <h6 className="mb-0 text-cus-primary">John Doe</h6>
                                        <span className="mb-0 text-cus-primary messager-state">California , USA</span>
                                        <p className="messager-last mb-0">lurem ipsum user text for testing</p>
                                    </div>
                                </div>
                                <p className="message-time ml-auto d-contents w-100 mb-0 text-right">Saturday, sep 12, 2020 </p>
                                <div className="user-mess-action">
                                    <button type="button" className="bg-transparent border-0 px-0"><span className="bg-cus-danger rounded-circle action-btn mr-1"><FontAwesomeIcon  className="fa fa-trash text-white" icon={faTrash} /></span></button>
                                    <button type="button" className="bg-transparent border-0 px-0"><span className="border-cus-success rounded-circle action-btn"><FontAwesomeIcon  className="text-cus-success" icon={faCheck} /></span></button>
                                </div>
                            </div>
                            <div className="users-messages border-bottom px-2 pt-2 pb-3 position-relative">
                                <div className="d-flex flex-wrap  chat-user-box">
                                    <div className="messager-avatar ">
                                        <img className="rounded-circle" src={user_avatar} width="70px" height="70px" />
                                    </div>
                                    <div className="messager-detail pl-3">
                                        <h6 className="mb-0 text-cus-primary">John Doe</h6>
                                        <span className="mb-0 text-cus-primary messager-state">California , USA</span>
                                        <p className="messager-last mb-0">lurem ipsum user text for testing</p>
                                    </div>
                                </div>
                                <p className="message-time ml-auto d-contents w-100 mb-0 text-right">Saturday, sep 12, 2020 </p>
                                <div className="user-mess-action">
                                    <button type="button" className="bg-transparent border-0 px-0"><span className="bg-cus-danger rounded-circle action-btn mr-1"><FontAwesomeIcon  className="fa fa-trash text-white" icon={faTrash} /></span></button>
                                    <button type="button" className="bg-transparent border-0 px-0"><span className="border-cus-success rounded-circle action-btn"><FontAwesomeIcon  className="text-cus-success" icon={faCheck} /></span></button>
                                </div>
                            </div>
                            <div className="users-messages border-bottom px-2 pt-2 pb-3 position-relative">
                                <div className="d-flex flex-wrap  chat-user-box">
                                    <div className="messager-avatar ">
                                        <img className="rounded-circle" src={user_avatar} width="70px" height="70px" />
                                    </div>
                                    <div className="messager-detail pl-3">
                                        <h6 className="mb-0 text-cus-primary">John Doe</h6>
                                        <span className="mb-0 text-cus-primary messager-state">California , USA</span>
                                        <p className="messager-last mb-0">lurem ipsum user text for testing</p>
                                    </div>
                                </div>
                                <p className="message-time ml-auto d-contents w-100 mb-0 text-right">Saturday, sep 12, 2020 </p>
                                <div className="user-mess-action">
                                    <button type="button" className="bg-transparent border-0 px-0"><span className="bg-cus-danger rounded-circle action-btn mr-1"><FontAwesomeIcon  className="fa fa-trash text-white" icon={faTrash} /></span></button>
                                    <button type="button" className="bg-transparent border-0 px-0"><span className="border-cus-success rounded-circle action-btn"><FontAwesomeIcon  className="text-cus-success" icon={faCheck} /></span></button>
                                </div>
                            </div>
                            <div className="users-messages border-bottom px-2 pt-2 pb-3 position-relative">
                                <div className="d-flex flex-wrap  chat-user-box">
                                    <div className="messager-avatar ">
                                        <img className="rounded-circle" src={user_avatar} width="70px" height="70px" />
                                    </div>
                                    <div className="messager-detail pl-3">
                                        <h6 className="mb-0 text-cus-primary">John Doe</h6>
                                        <span className="mb-0 text-cus-primary messager-state">California , USA</span>
                                        <p className="messager-last mb-0">lurem ipsum user text for testing</p>
                                    </div>
                                </div>
                                <p className="message-time ml-auto d-contents w-100 mb-0 text-right">Saturday, sep 12, 2020 </p>
                                <div className="user-mess-action">
                                    <button type="button" className="bg-transparent border-0 px-0"><span className="bg-cus-danger rounded-circle action-btn mr-1"><FontAwesomeIcon  className="fa fa-trash text-white" icon={faTrash} /></span></button>
                                    <button type="button" className="bg-transparent border-0 px-0"><span className="border-cus-success rounded-circle action-btn"><FontAwesomeIcon  className="text-cus-success" icon={faCheck} /></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-7">
                    <div className="chat-box mt-3 bg-white">
                        <div className="card-cus-header py-3  bg-cus-primary text-white">
                            <div className="d-flex flex-wrap align-items-center">
                                <div className="messager-avatar ">
                                    <img className="rounded-circle" src={user_avatar} width="70px" height="70px" />
                                </div>
                                <div className=" pl-3">
                                    <h6 className="mb-0 text-white font-md-cus font-700">John Doe</h6>
                                    <span className="mb-0 text-white" style={{fontSize:11+'px'}}><FontAwesomeIcon className="text-cus-success mr-1" icon={faMapMarkerAlt} />California , USA</span>
                                </div>
                            </div>
                        </div>
                        <div className="chat-body px-3">
                            <div className="receive-message mt-3">
                                <div className="border-cus-success chat-design-left bg-succ-gredient d-inline-flex flex-wrap">
                                    <p className="mb-0">Are you available for a quick call?</p>
                                    <span className="d-block text-right w-100 text-cus-success">17:45</span>
                                </div>
                            </div>
                            <div className="send-message mt-3 text-right">
                                <div className="border-cus-primary chat-design-right bg-cus-gredient d-inline-flex flex-wrap">
                                    <p className="mb-0">sure i'm available right now?</p>
                                    <span className="d-block text-left w-100 text-cus-primary">17:45</span>
                                </div>
                            </div>
                            <div className="receive-message mt-3">
                                <div className="border-cus-success chat-design-left bg-succ-gredient d-inline-flex flex-wrap">
                                    <p className="mb-0">Are you available for a quick call?</p>
                                    <span className="d-block text-right w-100 text-cus-success">17:45</span>
                                </div>
                            </div>
                            <div className="send-message mt-3 text-right">
                                <div className="border-cus-primary chat-design-right bg-cus-gredient d-inline-flex flex-wrap">
                                    <p className="mb-0">sure i'm available right now?</p>
                                    <span className="d-block text-left w-100 text-cus-primary">17:45</span>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 mt-5">
                            <div className="message-type-field p-3 position-relative">
                                <input type="text" className="w-100" placeholder="Type Message" />
                                <div className="file-upload-btn position-absolute">
                                    <label className="mb-0">
                                        <input type="file" name="" className="d-none" />
                                        <FontAwesomeIcon icon={faPlus} className="text-cus-primary" />
                                    </label>
                                </div>
                                <div className="smile-icons position-absolute text-cus-primary">
                                    <FontAwesomeIcon icon={faSmile} />
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>

    </section>
    )
}
export default Messages;