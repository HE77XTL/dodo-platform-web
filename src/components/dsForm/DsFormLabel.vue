<template>
    <div class="dsFormLabel">
        <div v-if="labelProps.labelPosition === 'justify'"
             :style="labelStyle"
             :class="$utils.classNames('justifyFormItemLabel', {colon: labelProps.colon})">
            <div class="justifyLabelContent">
                {{labelProps.name}}
            </div>
        </div>
        <div v-else
             :style="labelStyle"
             :class="$utils.classNames('formItemLabel', getLabelPositionClass(labelProps.labelPosition), {colon: labelProps.colon})">
            {{labelProps.name}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "dsFormLabel",
        components: {},
        props: {
            labelProps: Object
        },

        data() {
            return {}
        },

        created() {
        },
        computed: {
            labelStyle() {
                const widthStyle = this.labelProps.labelWidth ? `${this.labelProps.labelWidth}px` : null;
                return {width: widthStyle}
            },
        },
        watch: {},
        methods: {
            getLabelPositionClass(position) {
                switch (position) {
                    case 'left':
                        return 'labelLeft';
                    case 'right':
                        return 'labelRight';
                    case 'justify':
                        return 'labelJustify';
                    default:
                        return 'labelLeft';
                }
            },
        }
    }
</script>

<style lang="less" scoped>
    .dsFormLabel {
        .formItemLabel {
            display: inline-block;

            &.labelLeft {
                text-align: left;
            }

            &.labelRight {
                text-align: right;
            }

            &:before {
                content: "*";
                display: inline-block;
                font-family: SimSun, sans-serif;
                color: #f56c6c;
                font-size: 14px;
                margin-right: 4px;
                line-height: 1;
            }

            &.colon {
                &:after {
                    content: "：";
                    margin-right: 4px;
                }
            }
        }

        .justifyFormItemLabel {
            display: flex;
            .justifyLabelContent {
                display: inline-block;
                width: 100%;
                text-align: justify;
                text-justify: distribute-all-lines; /*ie6-8*/
                text-align-last: justify; /* ie9*/
                -moz-text-align-last: justify; /*ff*/
                -webkit-text-align-last: justify; /*chrome 20+*/
            }

            &:before {
                content: "*";
                display: inline-block;
                font-family: SimSun, sans-serif;
                color: #f56c6c;
                font-size: 14px;
                margin-right: 4px;
                line-height: 1;
            }
            &.colon {
                &:after {
                    content: "：";
                    margin-right: 4px;
                }
            }
        }
    }
</style>
