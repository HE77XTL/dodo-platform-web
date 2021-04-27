<template>
    <div class="dsForm">
        <form action="#">
            <div v-for="formItem in formGroup" :key="formItem.name" :class="$utils.classNames('dsFormItem', getLabelAlignClass(formItem.rowAlign)) ">
                <DsFormLabel :labelProps="labelPropsFmt(formItem)"/>
                <div v-if="formItem.type === 'customSlot'" class="dsFormItemValue">
                    <slot :name="formItem.name"/>
                </div>
                <div v-if="!formItem.type || formItem.type === 'input'" class="dsFormItemValue">
                    <input type="text"
                           v-model="formData[formItem.name]"
                           :class="`ui-input dsFormItemInput ${formItem.rowClass}`">
                </div>
            </div>
            <div class="submitWrap">
                <slot name="submit">
                    <button @click="onRegister" class="ui-button" data-type="primary">{{formSubmitText}}</button>
                </slot>
            </div>
        </form>
    </div>
</template>

<script lang="js">
    import {defineComponent} from 'vue'
    import DsFormLabel from './DsFormLabel.vue'

    export default defineComponent({
        name: "dsForm",
        components: {DsFormLabel},
        props: {
            formGroup: Array,
            formSubmitText: String,
            labelWidth: Number,
            labelPosition: String,
            colon: {
                type: Boolean,
                default: false
            },

        },

        data() {
            return {
                userName: '',
                hexxx: '是否'
            }
        },

        created() {

        },
        computed: {
            formData() {
                return this.formGroup.reduce((accumulator, currentValue) => {
                    const initValue = this.$utils.valueEmpty(currentValue.initValue, '');
                    return Object.assign(accumulator, {
                        [currentValue.name]: initValue
                    })
                }, {})
            }
        },
        watch: {},
        methods: {
            xxx() {
                console.log(this.formData)

            },

            labelPropsFmt(formItem) {
                return {
                    labelPosition: this.labelPosition,
                    labelWidth: this.labelWidth,
                    colon: this.colon,
                    name: formItem.label,
                }
            },
            isAlignCenterItem(type) {
                const centerTypes = ['input', 'select']

            },
            getLabelAlignClass(alignType)  {
                switch (alignType) {
                    case 'top':
                        return 'alignTop';
                    case 'center':
                        return 'alignCenter';
                    case 'bottom':
                        return 'alignBottom';
                    default:
                        return 'alignCenter';
                }
            }
        }
    })
</script>

<style lang="less" scoped>
    .dsForm {

        .dsFormItem {
            display: flex;
            align-items: flex-start; /*只有默认input 的时候 是居中，其他自定义的formItem 顶部对齐（label 稍微 下一点）*/
            margin: 20px 0;
            &.alignCenter {
                align-items: center;
            }
            &.alignTop {
                align-items: flex-start;
            }
            &.alignBottom {
                align-items: flex-end;
            }
        }

        .dsFormItemValue {
            flex: 1;
            width: 100%;
            padding-left: 12px;
        }

        .dsFormItemInput {
            width: 227px;
        }

        .submitWrap {
            text-align: center;
        }
    }
</style>
