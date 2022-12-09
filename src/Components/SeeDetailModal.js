import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from "./Button";

export default function SeeDetailModal({ isOpen, setIsOpen, project }) {
    const { name, client_site, server_site, overview } = project;
    const overviews = overview.split("  ");

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md sm:max-w-2xl transform overflow-hidden rounded-2xl bg-base-100 p-6 text-left shadow-xl transition-all space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <h3 className="text-2xl font-bold">{name}</h3>
                                    <div className="flex flex-wrap gap-4">
                                        <a href={client_site} target="_blank" rel="noreferrer">
                                            <Button onClick={() => setIsOpen(false)}>Client Codes</Button>
                                        </a>
                                        <a href={server_site} target="_blank" rel="noreferrer">
                                            <Button onClick={() => setIsOpen(false)}>Server Codes</Button>
                                        </a>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Overview</h3>
                                    <ul className="list-disc">
                                        {overviews.map((overview, index) => (
                                            <li className="ml-4" key={index}>
                                                {overview}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <Button onClick={() => setIsOpen(false)}>Got it, thanks!</Button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
