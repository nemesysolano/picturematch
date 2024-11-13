import React from 'react';
import './BackForth.css';

export type BackForthProperties = {
    isBackDisabled?: boolean;
    isForthDisabled?: boolean;
    onBackRequest?: () => void;
    onForthRequest?: () => void;
    className?: string;
}

const onBackRequestDefault = () => {}
const onForwardRequestDefault = () => {}

export const BackForth: React.FC<BackForthProperties> = (props: BackForthProperties) => {
    const onBackRequest = props.onBackRequest || onBackRequestDefault;
    const onForthRequest = props.onForthRequest || onForwardRequestDefault;
    const isBackDisabled = typeof props.isBackDisabled === "boolean" ? props.isForthDisabled!! : true;
    const isForthDisabled = typeof props.isForthDisabled === "boolean" ? props.isForthDisabled!! : true;
    const className = `back-forth ${props.className || ''}`.trim();

    return (
        <div className={className}>
            <button type='button' onClick={onBackRequest}  disabled={isBackDisabled}>&lt;&lt;</button>
            <button type='button' onClick={onForthRequest} disabled={isForthDisabled}>&gt;&gt;</button>
        </div>
    )
}