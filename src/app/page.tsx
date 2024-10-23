import classNames from 'classnames';
import {Jim_Nightshade, La_Belle_Aurore} from 'next/font/google';
import Image from 'next/image';
import {FaFacebook, FaInstagram} from 'react-icons/fa6';

import photo from '../../public/images/photo1.jpg';

const laBelleAurore = La_Belle_Aurore({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-la-belle-aurore',
});

const jim_Nightshade = Jim_Nightshade({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-jim_nightshade',
});

export default function Home() {
  return (
    <div className={`${laBelleAurore}`}>
      <div className='bg-home-hands bg-cover lg:bg-cover bg-no-repeat w-[2400] h-[400px] lg:h-[500px] lg:bg-[center_bottom_-10rem] mb-28 relative'>
        <a
          href=''
          className={classNames(
            'absolute bg-[#FFBCB2] text-[#FE6A6A] w-80 text-4xl p-3 -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4',
            laBelleAurore.className
          )}
        >
          Prothésiste ongulaire
        </a>
      </div>
      <div className='flex flex-col mb-40'>
        <Image
          src={'/images/hands.png'}
          alt={''}
          width={400}
          height={200}
          className='self-center'
        />
        <h2
          className={classNames(
            'text-[#FFCECA] text-4xl text-center',
            laBelleAurore.className
          )}
        >
          House of Ju - Beauté des ongles
        </h2>
      </div>
      <div className='bg-[#FFF2F0] min-[1148px]:h-[620px] relative flex flex-col min-[1148px]:flex-row justify-center items-center h-auto gap-8 min-[1148px]:gap-8'>
        <div className='min-[1148px]:pl-28'>
          <Image
            src={photo.src}
            alt={''}
            width={1170}
            height={1560}
            className={classNames(
              'border-[14px] border-[#FFBCB2] -top-7 w-[650px] h-[710px] min-[1148px]:w-[480px] min-[1148px]:h-[690px] min-[1148px]:absolute',
              'static'
            )}
          />
        </div>
        <div className='flex flex-col items-center gap-10 px-12 py-12 min-[1148px]:pl-[30rem] min-[1148px]:items-baseline'>
          <h2
            className={classNames(
              'text-[#FE6A6A] text-7xl uppercase font-jimNightshade'
            )}
          >
            Julia santin
          </h2>
          <h3
            className={classNames('text-[#FFA79A] text-3xl font-laBelleAurore')}
          >
            Prothésiste ongulaire à La Roche-sur-Foron
          </h3>
          <div className='h-0.5 w-1/4 bg-[#FFBCB2]'></div>
          <p className='text-[#FFA79A]'>
            En tant que prothésiste ongulaire, j’ai à coeur de prendre soin de
            vous, vos ongles afin de mettre en avant votre beauté naturelle.
            Vernis simple, semi-permanent, capsules, gel, nail-art… Retrouvez
            toutes mes prestations sur mon site, et venez vous faire bichonner
            dans mon cocon de beauté, toujours avec des produits de qualité.
          </p>
          <a
            href=''
            className={classNames(
              "text-[#FE6A6A] text-3xl uppercase after:content-['<-'] before:content-['->'] font-jimNightshade"
            )}
          >
            En savoir plus sur moi
          </a>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-around items-center py-24'>
        <div className='text-center'>
          <h3
            className={classNames(
              'text-[#FFA79A] text-4xl p-5 uppercase border-t-2 border-b-2 border-[#FFBCB2] my-5',
              jim_Nightshade.className
            )}
          >
            Beauté
            <br /> des ongles
          </h3>
          <a
            href='/services'
            className="text-[#FE6A6A] after:content-['<-'] before:content-['->']"
          >
            {' '}
            Découvrir{' '}
          </a>
        </div>
        <Image
          src={'/images/hands2.png'}
          alt={''}
          width={300}
          height={300}
          className='my-24'
        />
        <div className='text-center'>
          <h3
            className={classNames(
              'text-[#FFA79A] text-4xl p-5 uppercase border-t-2 border-b-2 border-[#FFBCB2] my-5',
              jim_Nightshade.className
            )}
          >
            Beauté
            <br /> du regard
          </h3>
          <a href='' className='text-[#FE6A6A] capitalize'>
            à venir
          </a>
        </div>
      </div>
      <div className='flex justify-center lg:flex lg:justify-center lg: items-center relative h-screen'>
        <Image
          src={'/images/flowers.jpg'}
          alt={''}
          width={2800}
          height={1900}
          className='h-full -z-10 absolute top-0 left-0 right-0 bottom-0 opacity-65 object-cover'
        />
        <div className='flex flex-col lg:flex-row z-10 justify-center gap-32 lg:gap-96 items-center my-auto'>
          <div className='bg-white bg-transparent opacity-50'>
            <h3 className='uppercase p-24 text-3xl text-[#FE6A6A]'>
              Espace
              <br /> client
            </h3>
          </div>
          <div className={classNames(' w-60 text-center flex flex-col gap-12')}>
            <p className={classNames('text-[#781b1b] text-xl mx-3')}>
              Connectez-vous à votre espace client pour gérer vos rendez-vous.
            </p>
            <div className='border py-[10px] border-[#FFBCB2]'>
              <a
                href='/login'
                className={classNames(
                  'uppercase text-lg text-white bg-[#FFBCB2] w-full py-1 px-10'
                )}
              >
                Connectez vous
              </a>
            </div>
          </div>
        </div>
        <div className='flex lg:flex-row'></div>
      </div>
      {/* <div className="flex flex-col items-center gap-4 text-center bg-[#FFF2F0] py-10">
          <Image
          src={"/images/logojs.png"}
          alt=""
          width={100}
          height={66}
          className="h-full"
          />
          <h3 className={classNames("text-[#FE6A6A] text-3xl", laBelleAurore.className)}>Prothésiste Ongulaire</h3>
          <h2 className="text-[#FFA79A] uppercase font-jimNightshade text-2xl">Julia Santin</h2>
          <hr className="h-0.5 lg:w-1/4 w-3/4 bg-[#FFBCB2]"></hr>
          <h3 className={classNames("text-[#FE6A6A] text-3xl", laBelleAurore.className)}>Adresse</h3>
          <p className="text-[#FFA79A] font-labelleaurore">491 Route de la Vallée du Giffre<br/>74250 Fillinges</p><h3 className={classNames("text-[#FE6A6A] text-3xl", laBelleAurore.className)}>Horaires</h3>
          <p className="text-[#FFA79A] capitalize">Mardi, mercredi, jeudi, vendredi, samedi 9h - 18h<br/>Lundi et dimanche fermé</p>
          <hr className="h-0.5 lg:w-1/4 w-3/4 bg-[#FFBCB2]"></hr>
          <div className="flex text-2xl gap-2 mb-4 text-[#FE6A6A]"><a target="blank" href="https://www.instagram.com/houseofju22/"><FaInstagram/></a> <a target="blank" href="https://www.facebook.com/julia.dijoux.507"><FaFacebook /></a></div>
        </div> */}
    </div>
  );
}
