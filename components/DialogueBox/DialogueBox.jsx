import React from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { Button } from '../ui/button';

function DialogueBox({ variant, handleDialogue, image, sidebar }) {
  if (variant === 'image') {
    return (
      <Dialog
        className=''
        defaultOpen
        onOpenChange={() => {
          handleDialogue(false);
        }}
      >
        <DialogContent>
          <div className='w-full h-full flex justify-center items-center  py-0 px-0 '>
            <img
              src={`${
                process.env.NEXT_BACKEND_URL
              }/event_image/${image}.png`}
              alt=''
              className='h-[450px] w-[450px]'
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  } else if (variant === 'limit') {
    return (
      <Dialog
        className=''
        defaultOpen
        onOpenChange={() => {
          handleDialogue(false);
        }}
      >
        <DialogContent>
          <div className='p-10 space-y-6'>
            <section className='space-y-5'>
              <h1 className='text-2xl font-medium'>
                {sidebar
                  ? 'Please SignIn or Register '
                  : 'You have reached the limit.'}
              </h1>
              <h1>
                {sidebar
                  ? 'Please Register or SignIn to use all the features of Resume AI'
                  : 'Too many generations,please try again later or get started from'}
                <span>&nbsp;</span>
                {sidebar && <br />}
                <a
                  className='hover:opacity-65'
                  href={process.env.NEXT_SIGN_UP_URL}
                >
                  <span className='text-blue-500 underline'>
                    app.rebuzzai.com
                  </span>
                </a>
              </h1>
            </section>

            <section className='w-full flex justify-end space-x-4'>
              <Button
                onClick={() => {
                  handleDialogue(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() =>
                  (window.location.href = process.env.NEXT_SIGN_UP_URL)
                }
              >
                Visit
              </Button>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}

export default DialogueBox;
