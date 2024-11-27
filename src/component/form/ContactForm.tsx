import Image from 'next/image';
import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <h3 className='font-jimNightshade uppercase font-bold text-5xl text-bittersweet'>
        Bienvenue
      </h3>
      <p className='text-center font-arima text-xl text-mona-lisa'>
        Créer votre espace client pour prendre rendez-vous.
      </p>
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col justify-center items-center gap-4'
      >
        Input
        <div className='mt-10'>
          <input
            type='submit'
            value="S'enregistrer"
            className='cursor-pointer w-72 text-white h-10 bg-mona-lisa rounded-lg'
          />
        </div>
        <div className='mt-4 flex flex-col gap-3 justify-center items-center'>
          <p className='text-mona-lisa w-72 text-center text-xs'>
            En vous inscrivant, vous acceptez notre{' '}
            <a className=' text-bittersweet font-bold cursor-pointer'>
              politique de confidentialité
            </a>{' '}
            et le traitement de vos données personnelles.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
