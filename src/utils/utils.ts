import * as classNames from 'classnames'

const utils = {
    classNames: classNames,
    valueEmpty(judgeValue: string | number | null | undefined, replaceValue: any) {
        if(judgeValue === '' || judgeValue === undefined || judgeValue === null || isNaN(<number>judgeValue))  {
            return replaceValue
        }else {
            return judgeValue
        }

    }
};

export default utils
