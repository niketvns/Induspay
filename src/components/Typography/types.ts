import {ReactNode} from 'react'

export enum TypographyVariant {
    Heading1 = 'heading1',
    Heading2 = 'heading2',
    Heading3 = 'heading3',
    Heading4 = 'heading4',
    Heading5 = 'heading5',
    BodyRegular = 'bodyRegular',
    BodyMedium = 'bodyMedium',
    ErrorText = 'errorText'
}

export enum TypographyTag {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
    p = 'p',
    div = 'div',
    span = 'span',
}

export enum TypographyColor {
    Primary = "primary",
    Secondary = "secondary"
}

export interface TypographyProps {
    tag: TypographyTag
    variant: TypographyVariant
    children?: ReactNode
    className?: string
    color?: TypographyColor
}
