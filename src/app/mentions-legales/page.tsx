import Image from 'next/image';

export default function MentionsLegales() {
  return (
    <div>
      <div className='bg-cgu md:flex md:justify-center md:items-center bg-no-repeat bg-cover h-[300px] py-5 px-5 md:h-[450px] lg:bg-[center_bottom_-10rem] lg:h-[500px]'>
        <div className='bg-white bg-transparent self-center md:h-2/3 md:w-1/2 bg-opacity-75 md:self-center h-full gap-8 flex flex-col justify-center items-center border-double border-4 border-melon'>
          <Image
            src={'/images/paper-pen.webp'}
            alt={'dessin de stylo et papier'}
            width={352}
            height={302}
            className='w-32'
          />
          <h2 className='font-jimNightshade uppercase text-4xl text-bittersweet'>
            Mentions légales
          </h2>
        </div>
      </div>

      <div className='text-mona-lisa md:mx-auto flex flex-col gap-8 mx-5 my-10 shadow-[0_10px_20px_rgba(255,_167,_154,_1)] p-8 rounded-lg'>
        <div className='flex flex-col gap-4'>
          {' '}
          <h3 className='font-jimNightshade uppercase text-3xl text-bittersweet'>
            Éditeur du site :
          </h3>{' '}
          <p>
            En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour
            la confiance dans l’économie numérique, il est précisé aux
            utilisateurs du site{' '}
            <a href='/' className='text-bittersweet font-bold'>
              https://house-of-ju.fr/
            </a>{' '}
            l’identité des différents intervenants dans le cadre de sa
            réalisation et de son suivi :
          </p>
          <p>
            <span className='font-bold'>Propriétaire :</span> Julia Santin - 491
            Route de la Vallée du Giffre 74250 Fillinges
            <br />
            <span className='font-bold'>Créateur : </span>
            <a
              href=''
              className='text-bittersweet font-laBelleAurore text-xl font-bold'
            >
              Laura Santin
            </a>
            <br />
            <span className='font-bold'>Responsable publication :</span> Laura
            Santin - laura.santin73@gmail.com
            <br />
            Le responsable publication est une personne physique ou une personne
            morale.
            <br />
            <span className='font-bold'>Hébergeur :</span> [Nom de
            l&apos;hébergeur]
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='font-jimNightshade uppercase text-3xl text-bittersweet'>
            Conditions générales d&apos;utilisation du site :
          </h3>
          <p>
            L&apos;utilisation du site{' '}
            <a href='/' className='text-bittersweet font-bold'>
              https://house-of-ju.fr/
            </a>{' '}
            implique l&apos;acceptation complète et sans réserve des conditions
            générales d&apos;utilisation décrites ci-dessous. Ces conditions
            peuvent être modifiées ou complétées à tout moment, il est donc
            recommandé aux utilisateurs de les consulter régulièrement.
          </p>
          <p>
            Le site est normalement accessible aux utilisateurs à tout moment.
            Cependant, une interruption pour maintenance technique peut être
            décidée par Julia Santin, qui s&apos;efforcera de prévenir les
            utilisateurs à l&apos;avance en indiquant les dates et heures de
            l&apos;intervention.
          </p>
          <p>
            Le site{' '}
            <a href='/' className='text-bittersweet font-bold'>
              https://house-of-ju.fr/
            </a>{' '}
            est régulièrement mis à jour par Laura Santin. De même, les mentions
            légales peuvent être modifiées à tout moment et s&apos;imposent aux
            utilisateurs, qui sont invités à les consulter fréquemment pour en
            prendre connaissance.
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='font-jimNightshade uppercase text-3xl text-bittersweet'>
            Limitations contractuelles sur les données techniques :
          </h3>

          <p>Le site utilise la technologie JavaScript.</p>
          <p>
            Le site web décline toute responsabilité pour d&apos;éventuels
            dommages matériels résultant de son utilisation. Par ailleurs,
            l&apos;utilisateur s&apos;engage à accéder au site avec un
            équipement récent, exempt de virus, et en utilisant un navigateur
            moderne et à jour.
          </p>
        </div>{' '}
        <div className='flex flex-col gap-4'>
          <h3 className='font-jimNightshade uppercase text-3xl text-bittersweet'>
            Description des services fournis :
          </h3>
          <p>
            Le site{' '}
            <a href='/' className='text-bittersweet font-bold'>
              https://house-of-ju.fr/
            </a>{' '}
            a pour objectif de fournir des informations sur l&apos;ensemble des
            activités de la société.
          </p>
          <p>
            Julia Santin s&apos;efforce de diffuser sur le site{' '}
            <a href='/' className='text-bittersweet font-bold'>
              https://house-of-ju.fr/
            </a>{' '}
            des informations aussi exactes que possible. Toutefois, elle ne peut
            être tenue responsable des omissions, inexactitudes ou lacunes dans
            la mise à jour, qu&apos;elles soient de son fait ou de celui des
            tiers partenaires qui fournissent ces informations.
          </p>
          <p>
            Toutes les informations présentes sur le site{' '}
            <a href='/' className='text-bittersweet font-bold'>
              https://house-of-ju.fr/
            </a>{' '}
            sont données à titre indicatif et sont susceptibles d&apos;évoluer.
            Par ailleurs, les renseignements affichés ne sont pas exhaustifs et
            peuvent être modifiés après leur mise en ligne.
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='font-jimNightshade uppercase text-3xl text-bittersweet'>
            Propriété intellectuelle :
          </h3>
          <p>
            Tous les contenus présents sur le site{' '}
            <a href='/' className='text-bittersweet font-bold'>
              https://house-of-ju.fr/
            </a>{' '}
            (textes, images, logos, etc.) sont protégés par les droits de
            propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication,
            adaptation de tout ou partie des éléments du site, quel que soit le
            moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
            préalable de : Julia Santin.
          </p>
          <p>
            Toute exploitation non autorisée du site ou de l’un quelconque des
            éléments qu&apos;il contient sera considérée comme constitutive
            d&apos;une contrefaçon et poursuivie conformément aux dispositions
            des articles L.335-2 et suivants du Code de Propriété
            Intellectuelle.
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='font-jimNightshade uppercase text-3xl text-bittersweet'>
            Gestion des données personnelles :
          </h3>
          <p>
            En France, les données personnelles sont notamment protégées par la
            loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004,
            l&apos;article L. 226-13 du Code pénal et la Directive Européenne du
            24 octobre 1995.
          </p>
          <p>
            Lors de l&apos;utilisation du site{' '}
            <a href='/' className='text-bittersweet font-bold'>
              https://house-of-ju.fr/
            </a>{' '}
            , les informations suivantes peuvent être collectées : l&apos;URL
            des liens par lesquels l&apos;utilisateur a accédé au site, le
            fournisseur d&apos;accès internet de l&apos;utilisateur, ainsi que
            l&apos;adresse de protocole Internet (IP) de l&apos;utilisateur.
          </p>
          <p>
            En tout état de cause, Julia Santin ne collecte des informations
            personnelles concernant l&apos;utilisateur que lorsque cela est
            nécessaire pour certains services proposés par le site{' '}
            <a href='/' className='text-bittersweet font-bold'>
              https://house-of-ju.fr/
            </a>{' '}
            . L&apos;utilisateur fournit ces informations en toute connaissance
            de cause, notamment lorsqu&apos;il les saisit lui-même. Il est alors
            précisé à l&apos;utilisateur du site l&apos;obligation ou non de
            fournir ces informations.
          </p>
        </div>
      </div>
    </div>
  );
}
