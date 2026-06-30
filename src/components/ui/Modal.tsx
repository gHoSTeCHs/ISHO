import {
	Dialog,
	DialogPanel,
	Transition,
	TransitionChild,
} from '@headlessui/react';
import { PropsWithChildren } from 'react';

interface ModalProps {
	show: boolean;
	onClose: () => void;
}

export default function Modal({
	children,
	show,
	onClose,
}: PropsWithChildren<ModalProps>) {
	return (
		<Transition show={show} leave="duration-200">
			<Dialog as="div" className="modal-root" onClose={onClose}>
				<TransitionChild
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<div className="modal-overlay-bg" aria-hidden="true" />
				</TransitionChild>

				<div className="modal-scroll">
					<TransitionChild
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:scale-95">
						<DialogPanel className="modal-panel">{children}</DialogPanel>
					</TransitionChild>
				</div>
			</Dialog>
		</Transition>
	);
}
