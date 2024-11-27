import React from 'react';

const UpdatePasswordForm = () => {
  return (
    <div>
      {/* <div>
        <Image
          src={'/images/registLogin.webp'}
          alt={''}
          width={2000}
          height={669}
        />
      </div> */}
      <div className='flex flex-col justify-center items-center gap-4 my-10 mx-auto p-10 shadow-[0_10px_20px_rgba(255,_167,_154,_1)] rounded-lg w-[350px] md:w-[400px]'>
        <h3 className='font-jimNightshade uppercase font-bold text-3xl text-bittersweet'>
          Bonjour !
        </h3>
        <p className='text-center font-arima text-xl text-mona-lisa'>
          Réinitialiser votre mot de passe
        </p>
        <form
          // onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col justify-center items-center gap-4'
        >
          <div className='mt-10'>
            <input
              type='submit'
              value='Valider'
              className='cursor-pointer w-72 text-white h-10 bg-mona-lisa rounded-lg'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePasswordForm;
