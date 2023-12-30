/* eslint-disable @typescript-eslint/no-explicit-any */
import ButtonPrimary from '../ButtonPrimary';

type Props = {
    message: string,
    onDialogClose: () => any;
}

export default function DialogInfo({ message, onDialogClose }: Props) {
    return (
        <div className='dsc-dialog-background' onClick={onDialogClose}>
            <div className='dsc-dialog-box' onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div onClick={onDialogClose} className='dsc-dialog-container'>
                    <ButtonPrimary text='Ok' />
                </div>
            </div>
        </div>
    )
}
