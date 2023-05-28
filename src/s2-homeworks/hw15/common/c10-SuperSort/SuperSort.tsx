import React from 'react'
import downIcon from '../../assets/sortdown.png'
import upIcon from '../../assets/sortup.png'
import noneIcon from '../../assets/sort.svg'
import s from '../../HW15.module.css'


// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // return up // исправить

    switch (sort) {
        case '':
            return down
        case down:
            return up
        case up:
            return ''
        default:
            return down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        console.log('sort: ', sort)
        console.log('down: ', down)
        console.log('up: ', up)

        onChange(pureChange(sort, down, up))
    }


    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img className={s.icon}
                id={id + '-icon-' + sort}
                src={icon}
            />
        </span>
    )
}

export default SuperSort
