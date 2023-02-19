<template>
    <div class="container h-auto py-3">
        <div class="d-flex rounded-circle px-2">
            <img
                :src="require('/src/assets/images/d-img.svg')"
                alt="logo"
                width="80"
            />
            <div class="d-flex">
                <div class="upload-button">
                    <input
                        @change="attachFile($event)"
                        style="display: none"
                        type="file"
                        ref="fileInput"
                    />
                    <span v-if="attachedFileName">
                        {{ attachedFileName }}
                        <span @click="attachedFileName = ''" class="remove-file"
                            >Remove</span
                        >
                    </span>
                    <div
                        v-if="!attachedFileName"
                        @click="$refs.fileInput.click()"
                        id="attach-file"
                        type="button"
                        class="upload-text"
                    >
                        Upload new picture
                    </div>
                </div>
                <div class="delete-button">
                    <div class="delete-text">Delete</div>
                </div>
            </div>
        </div>

        <!-- Read-Only Form -->
        <div class="form-group">
            <span class="p-input-icon-right p-float-label">
                <label class="label-text" for="usr">Your ID</label>
                <InputText
                    type="text"
                    class="form-input"
                    value="196334"
                    aria-label="Disabled input example"
                    disabled
                    readonly
                />
                <i class="pi">
                    <img
                        :src="require('/src/assets/images/lock-icon.svg')"
                        alt="input-lock"
                    />
                </i>
            </span>
        </div>
        <div class="form-group">
            <span class="p-input-icon-right p-float-label">
                <label class="label-text" for="usr">High School Name</label>
                <InputText
                    type="text"
                    class="form-input"
                    value="Turkish Grammer High School"
                    aria-label="Disabled input example"
                    disabled
                    readonly
                />
                <i class="pi">
                    <img
                        :src="require('/src/assets/images/lock-icon.svg')"
                        alt="input-lock"
                    />
                </i>
            </span>
        </div>
        <div class="form-group">
            <span class="p-input-icon-right p-float-label">
                <label class="label-text" for="usr">Registered Date</label>
                <InputText
                    type="text"
                    class="form-input"
                    value="MM     -    DD    -     YY"
                    aria-label="Disabled input example"
                    disabled
                    readonly
                />
                <i class="pi">
                    <img
                        :src="require('/src/assets/images/lock-icon.svg')"
                        alt="input-lock"
                    />
                </i>
            </span>
        </div>
        <div class="form-group">
            <span class="p-input-icon-right p-float-label">
                <label class="label-text" for="usr">Registered Email Address</label>
                <InputText
                    type="text"
                    class="form-input"
                    value="TurkishGrammerHigh School@gmail.com"
                    aria-label="Disabled input example"
                    disabled
                    readonly
                />
                <i class="pi">
                    <img
                        :src="require('/src/assets/images/lock-icon.svg')"
                        alt="input-lock"
                    />
                </i>
            </span>
        </div>
        <div class="form-group">
            <span class="p-input-icon-right p-float-label">
                <label class="label-text" for="usr">First Name</label>
                <InputText
                    type="text"
                    class="form-input"
                    value="Muhammad"
                    aria-label="Disabled input example"
                    disabled
                    readonly
                />
                <i class="pi">
                    <img
                        :src="require('/src/assets/images/lock-icon.svg')"
                        alt="input-lock"
                    />
                </i>
            </span>
        </div>
        <div class="form-group">
            <span class="p-input-icon-right p-float-label">
                <label class="label-text" for="usr">Last Name</label>
                <InputText
                    type="text"
                    class="form-input"
                    value="Ahamad"
                    aria-label="Disabled input example"
                    disabled
                    readonly
                />
                <i class="pi">
                    <img
                        :src="require('/src/assets/images/lock-icon.svg')"
                        alt="input-lock"
                    />
                </i>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SchoolInfo",
        data() {
            return {};
        },
        methods: {
            attachFile(e) {
                let attachedFile = e.target.files[0];
                var reader = new FileReader();
                reader.readAsDataURL(attachedFile);
                /* reader.onload = (e) => {
                    e;
                }; */
                this.attachedFileName = attachedFile.name;
            },
        },
    };
</script>

<style scoped>
    .container {
        margin-bottom: 60px;
    }
    .upload-button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px;
        position: absolute;
        width: 128px;
        height: 34px;
        left: 415px;
        top: 255px;
        background: #fac515;
        border-radius: 8px;
    }
    .upload-text {
        width: 112px;
        height: 18px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
    }
    .delete-button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px;
        position: absolute;
        width: 54px;
        height: 34px;
        left: 563px;
        top: 255px;
        background: #e5e7eb;
        border-radius: 8px;
    }
    .delete-text {
        width: 38px;
        height: 18px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: #1d2939;
        mix-blend-mode: normal;
    }
    .form-group {
        margin-top: 10vh;
    }
    .sub-input {
        margin-top: 72px;
    }
    .form-input {
        width: 591px;
        height: 44px;
        background: #eaecf0;
    }
    .input-icon {
        position: absolute;
        width: 16px;
        height: 21px;
        margin-right: 410px;
        margin-top: 40px;
    }
    .label-text {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #1d2939;
    }

    .p-float-label label {
        margin-top: -2.9rem;
    }
</style>