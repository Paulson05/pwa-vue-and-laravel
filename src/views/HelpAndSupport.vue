<template lang="html">
    <div>
        <h2 class="text-center mb-5">Frequently Asked Questions</h2>
        <div class="faq-container mx-auto w-80">
            <div v-for="(question, index) in questions" :key="index">
                <h3 @click="showAnswer(index)" class="d-flex justify-content-between"
                    :class="[question.active ? 'activeFAQ' : 'inactiveFAQ']">
                    {{ question.question }}
                    <span>
                        <img :src="require(`/src/assets/images/dropcon.svg`)" alt="chevron down icon"
                            :class="{ activeArrow: question.active }" />
                    </span>
                </h3>
                <p class="p-3" v-if="question.active">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores perspiciatis,
                    quibusdam enim, optio quis at ex provident minus a sapiente placeat autem esse
                    accusantium. Quisquam sequi totam recusandae maiores amet?
                </p>
            </div>
        </div>
        <div class="help-videos-container">
            <h3 class="text-center">Paramount Students help guide in videos</h3>
            <div class="help-videos mb-3">
                <div v-for="num of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="num" >
                    <div class="videoContainer help-video">
                        <img :src="require(`/src/assets/images/helpVideo.svg`)" alt="" id="videoPoster" />
                        <img :src="require(`/src/assets/images/playIcon.svg`)" class="centered hoverable" id="playCon" >
                        <p class="timer">2:00 min</p>
                    </div>
                    <h3>
                        Paramount Student's Sign
                        In tutorial
                    </h3>
                </div>
            </div>
        </div>
        <div class="tech-form-container">
            <h3 class="text-center">Paramount Students Technical Service Center</h3>
            <p class="text-center pt-4">
                You can reach us anytime via <a href="mailto: support@paramountstudents.com">
                    support@paramountstudents.com</a>
            </p>
            <form @submit.prevent="submitForm()" class="tech-service-form">
                <div class="d-flex flex-column">
                    <label for="subject"><span class="label-txt">Subject</span></label>
                    <input type="text" name="subject" id="subject" placeholder="Please write your subject of issue">
                </div>
                <div class="d-flex flex-column">
                    <label for="description"><span class="label-txt">How can we help you?</span></label>
                    <textarea placeholder="Tell us a little about the issue" name="description" id="issue-description"
                        cols="30" rows="5"></textarea>
                </div>
                <div class="d-flex justify-content-between pt-2">
                    <input @change="attachFile($event)" style="display: none;" type="file" ref="fileInput" />
                    <span v-if="attachedFileName">
                        {{ attachedFileName }}
                        <span @click="attachedFileName = ''" class="remove-file">Remove</span>
                    </span>
                    <button v-if="!attachedFileName" @click="$refs.fileInput.click()" id="attach-file" type="button">
                        Attach File
                        <img :src="require(`/src/assets/images/attach.svg`)" alt="" />
                    </button>
                    <button id="submit" :style="submittingStyle">
                        Submit{{ submitting ? 'ting' : '' }}
                    </button>
                </div>
            </form>
            <VueCompositioncheck></VueCompositioncheck>
        </div>
        <div class="live-chat-container text-end">
            <button id="live-chat">
                <img :src="require(`/src/assets/images/message-square.png`)" alt="" />
                Live Chat With Us
            </button>
        </div>
        <ResendModal :head="modalProps.heading" :subText="modalProps.response" :img="modalProps.image" />
    </div>
</template>
<script>
    import ResendModal from "@/components/ResendModal.vue";
    import { FAQ } from '@/data'
    import { Modal } from "bootstrap";
    export default {
        name: "HelpAndSupport",
        data() {
            return {
                questions: FAQ,
                currentId: 1,
                animate: true,
                attachedFileName: "",
                submitting: false,
                submittingStyle: {},
                modalProps: {
                    response:
                        "We'll get back to you within 24 hours. Thank you so much for getting in touch with us",
                    image: "sent-success-icon.svg",
                    heading: "request sent",
                },
            };
        },
        methods: {
            submitForm() {
                if (!this.submitting) {
                    this.submitting = true;
                    this.submittingStyle = { opacity: 0.5, cursor: "no-drop" };
                    // eslint-disable-next-line no-undef
                    var myModal = new Modal(
                        document.getElementById("staticBackdrop"),
                        {
                            keyboard: false,
                        }
                    );
                    myModal.show();

                    setTimeout(() => {
                        this.submitting = false;
                        this.submittingStyle = {};
                    }, 3000);
                }
            },
            attachFile(e) {
                let attachedFile = e.target.files[0];
                var reader = new FileReader();
                reader.readAsDataURL(attachedFile);
                /* reader.onload = (e) => {
                                e;
                            }; */
                this.attachedFileName = attachedFile.name;
            },
            showAnswer(index) {
                this.questions.find(function (question, questionIndex) {
                    if (index == questionIndex) {
                        question.active = !question.active;
                    }
                });
            },
            home() {
                this.$router.push("/");
            },
            displayText(id, termsText) {
                this.currentId = id;
                this.termsDisplay = termsText;
                let mainBar = document.querySelector(".main-bar");
                if (mainBar.classList.contains("fadeIn") === false) {
                    mainBar.classList.add("fadeIn");
                }
                setTimeout(() => {
                    mainBar.classList.remove("fadeIn");
                }, 1000);
            },
        },
        components: { ResendModal },
    };
</script>
<style lang="scss">

$text-color: #1D2939;


p, h1, h2, h3, h4, h5, h6{
    color: $text-color
}
    // sass mixins
    @mixin button-style {
        padding: 0.6rem 0rem;
        border-radius: 0.5rem;
        border: none;
        font-weight: bold;
        width: 200px;
        //width: 274px;
    }

    .videoContainer {
        position: relative;
        text-align: center;
        color: white;
    }

    .videoContainer > img:first-child {
        opacity: 0.6;
    }

    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transition: transform 2s, filter 1.5s ease-in-out;
        transform: translate(-50%, -50%) scale(0.9);
    }

    .hoverable:hover {
        filter: grayscale(0);
        transform: translate(-50%, -50%) scale(1.1);
        cursor: pointer;
    }
    
    .timer {
        position: absolute;
        bottom: 0px;
        right: 16px;
        font-size: 12px !important;
        color: rgb(32, 32, 32);
    }

    .videoContainer {
        position: relative;
        text-align: center;
        color: white;
    }

    .videoContainer > img:first-child {
        opacity: 0.6;
    }

    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transition: transform 2s, filter 1.5s ease-in-out;
        transform: translate(-50%, -50%) scale(0.9);
    }

    .hoverable:hover {
        filter: grayscale(0);
        transform: translate(-50%, -50%) scale(1.1);
        cursor: pointer;
    }
    
    .timer {
        position: absolute;
        bottom: 0px;
        right: 16px;
        font-size: 12px !important;
        color: rgb(32, 32, 32);
    }

    // conditional classes
    .activeArrow {
        transform: rotate(-90deg);
    }

    .activeFAQ {
        opacity: 1;
        font-weight: 600;
        border: 1px solid #1D2939;
        border-left: 3px solid black;
    }

    .inactiveFAQ {
        border: solid gray;
        border-width: 1px 1px 0 1px;
    }
 

    div.faq-container {
        & h3 {
            // border: 1px solid gray;
            cursor: pointer;
            font-size: 1rem;
            padding: 1.2rem;
            margin: 0%;
            opacity: 0.75;
            color: #1D2939;

            &:hover {
                background-color: #fff;
                font-weight: bold;
            }

            span {
                transition: background-color 2s, transform 2s;
                display: inline-block;

                img {
                    transition: transform 1s;
                }
            }
        }

        //apply borther width to the last element
        & div:last-child{
            h3 {
                border-width: 1px;
            }
        }
    }

    div.help-videos-container {
        padding: 0 0 0 2rem;

        ::-webkit-scrollbar {
            width: 5px;
            height: 5px;
        }
        
        /* Track */
        ::-webkit-scrollbar-track {
            border-bottom: 1px solid #f79009;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #f79009;
            border: 1px solid #f79009;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #f79009;
        }

        h3 {
            margin: 5rem 0rem 0rem;
        }

        .help-videos {
            width: 100%;
            display: flex;
            overflow-y: auto;
            flex-wrap: nowrap;
            margin-top: 2rem;
            margin-bottom: 1rem;

            & > div {
                // border: 1px solid rgb(214, 207, 207);
                // padding: 1rem;
                margin: 2rem 1rem;
                flex-grow: 2;

                div {
                    border: 1px solid gray;
                    padding: 1rem;
                    width: 281px;
                    height: 181px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #c4c4c4;
                }

                h3 {
                    font-size: 1.3rem;
                    font-weight: 500;
                    margin-top: 1rem;
                    color: #101828

                }
            }
        }
    }

    div.tech-form-container {
        padding: 4rem 2rem 2rem;

        form {

            ::placeholder {
  color: #98A2B3;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
 color: #98A2B3;
}

::-ms-input-placeholder { /* Microsoft Edge */
 color: #98A2B3;
}

            .label-txt {
                color: #1D2939;
                font-size: 14px;

            }
            & > div {
                margin: 1rem 0rem;

                label {
                    padding: 0.5rem 0rem;
                }

                .remove-file {
                    padding: 0.25rem;
                    border: 1px solid red;
                    border-radius: 0.5rem;
                    font-size: 0.8rem;

                    &:hover {
                        cursor: pointer;
                        background-color: red;
                        color: white;
                    }
                }

                #subject,
                #issue-description {
                    padding: 0.7rem;
                    border: 1px solid #D0D5DD;
                }

                button {
                    @include button-style();

                    &#attach-file {
                        background-color: #eaecf0;
                        border: 1px solid#C3B5FD;
                        &:hover {
                            background-color: #a89bdb;
                        }

                        img {
                            padding-left: 0.5rem;
                        }
                    }

                    &#submit {
                        background-color: #fac515;
                        font-weight: 500;

                        &:hover {
                            background-color: #c49a10;
                        }
                    }
                }
            }
        }
    }

    div.live-chat-container {
        padding: 2rem;

        button {
            @include button-style();
            background: #85e13a;

            &:hover {
                background-color: #5a9727;
            }
        }
    }
</style>