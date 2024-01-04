import React from 'react'
import Header from '../components/Header'
import Timer from '../components/Timer'
import Footer from '../components/Footer'

export default function Homepage() {
  return (
    <>
      <div className="main--container">

        <Header />
        <section className="aboutKiro">
          <div className="main--container">
            <div className="custom-flex">
              <div className="custom-flex--column" data-aos="fade-right" >
                <div className="img-about"></div>
              </div>
              <div className="custom-flex--column" data-aos="fade-up">
                <div className="section-title">
                  <div className="title">Qu’est ce qu’un Kiro&nbsp;?</div>
                  <div className="img-title"></div>
                </div>
                <div className="paragraph-group" >
                  <div className="paragraph">Ahoy matelots ! Je suis Kiro,</div>
                  <div className="paragraph">le capitaine du navire légendaire 'Le Corsaire Crypto'. Laissez-moi vous conter l'histoire captivante du Kiron Token, notre trésor numérique conçu pour propulser tout l'équipage vers des horizons plus riches.</div>
                  <div className="paragraph">Des débuts excitants, une marée montante de prospérité, et une communauté unie ont façonné notre aventure. Le Kiron Token n'est pas seulement une cryptomonnaie, c'est le cœur vibrant d'une communauté déterminée à prospérer ensemble. À la vôtre, matelots, à une vie crypto pleine de trésors partagés !</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tokenomics" data-aos="fade-right">
          <div className="section-title">
            <div className="title">Tokenomics</div>
            <div className="img-title"></div>
          </div>
          <div className="paragraph">Ahoy, mes camarades de fortune ! Laissez-moi vous conter le récit des vents et des vagues qui forgent la Tokenomics du projet Kiro.&nbsp;🏴‍☠️💰<br />
            À bord du navire Kiro Token, notre trésorerie est distribuée tel un butin équitable, prête à être partagée avec la communauté qui brave les mers tumultueuses de la crypto. Voici la répartition de notre trésor numérique&nbsp;:</div>
          <div className="custom-flex">
            <div className="custom-flex--column">
              <div className="info-group">
                <div className="color-1"></div>
                <div className="info"><span>Capitaine Kiro's Share (10%)</span> : Un humble 10% réservé au Capitaine Kiro lui-même, le meneur intrépide de cette expédition. Un capitaine prospère guide son équipage vers des horizons riches et c'est notre engagement envers la réussite du projet.</div>
              </div>
              <div className="info-group">
                <div className="color-2"></div>
                <div className="info"><span>Airdrops pour Tous (15%)</span> : Un généreux trésor de 15% est dédié à tous les corsaires qui prennent part à notre aventure. Des airdrops fréquents récompenseront notre communauté loyale, car chaque membre contribue à la prospérité de notre navire.</div>
              </div>
              <div className="info-group">
                <div className="color-3"></div>
                <div className="info"><span>Marketing pour le Cap (10%)</span> : Pour hisser notre pavillon au sommet des mâts cryptographiques, 10% de notre trésor est alloué au marketing du Kiro Token. Des campagnes audacieuses et créatives propulseront notre nom à travers les océans numériques.
                </div>
              </div>
              <div className="info-group">
                <div className="color-4"></div>
                <div className="info"><span>Trésor Marchand (65%)</span> : La majorité, un robuste 65%, est destinée au trésor qui sera disponible sur le marché. C'est là que les corsaires du monde entier peuvent obtenir leur part du butin, échangeant et faisant prospérer notre précieux Kiro Token.
                </div>
              </div>
              <div className="bot-paragraph">Ainsi, avec cette Tokenomics bien équilibrée, nous nous engageons à assurer la transparence et l'équité à chaque étape de notre aventure crypto. Embarquez avec nous vers des eaux pleines d'opportunités et de richesses partagées&nbsp;!</div>
            </div>
            <div className="custom-flex--column">
              <div className="img-camembert"></div>
            </div>
          </div>
        </section>
        <section className="partnership">
          <div className="main--container">
            <div className="custom-flex">
              <div className="custom-flex--column" data-aos="fade-up">
                <div className="section-title">
                  <div className="title">Partenariat</div>
                  <div className="img-title"></div>
                </div>
                <div className="paragraph-group" >

                  <div className="paragraph">Oh, équipage intrépide du Kiro Token, le moment est venu de parler de nos quêtes en terres inconnues. Jusqu'à présent, notre navire n'a pas encore découvert de nouvelles terres pour notre cher équipage, mais soyez assurés que nous scrutons l'horizon avec une volonté farouche.</div>
                  <div className="paragraph">Nos ancres sont prêtes à être jetées dans des mers encore inexplorées, à la recherche de partenariats qui enrichiront notre écosystème. Les océans crypto sont vastes, et chaque alliance potentielle est une carte qui pourrait mener notre équipage vers des horizons plus riches.</div>
                  <div className="paragraph">
                    Comme les étoiles dans la nuit, nous continuons à naviguer, cherchant des constellations de partenaires qui partageront notre vision et contribueront à la croissance de notre navire. Nous sommes sur le point de hisser de nouvelles voiles, de découvrir des horizons prometteurs, et de bâtir des ponts entre les terres crypto encore inconnues.</div>
                <div className="paragraph">Restez à l'écoute, chers membres d'équipage, car chaque aube peut apporter la découverte de nouvelles contrées et l'établissement de partenariats fructueux. Ensemble, nous sommes prêts à écrire les chapitres futurs de notre aventure.</div>
              </div>
                </div>
              <div className="custom-flex--column" data-aos="fade-right">
                <div className="img-about"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="timer-container" data-aos="zoom-out">
          <Timer />
          <div className="paragraph">Avant le début du premier Airdrop&nbsp;!</div>
        </div>
        <section className="token-info" data-aos="fade-right" data-aos-duration="500">
          <div className="section-title">
            <div className="title">Prenez vos jetons dès maintenant&nbsp;!</div>
            <div className="img-title"></div>
          </div>
          <div className="paragraph-group" >

                  <div className="paragraph">Oh, équipage intrépide du Kiro Token, le moment est venu de parler de nos quêtes en terres inconnues. Jusqu'à présent, notre navire n'a pas encore découvert de nouvelles terres pour notre cher équipage, mais soyez assurés que nous scrutons l'horizon avec une volonté farouche.</div>
                  <div className="paragraph">Nos ancres sont prêtes à être jetées dans des mers encore inexplorées, à la recherche de partenariats qui enrichiront notre écosystème. Les océans crypto sont vastes, et chaque alliance potentielle est une carte qui pourrait mener notre équipage vers des horizons plus riches.</div>
                  <div className="paragraph">
                    Comme les étoiles dans la nuit, nous continuons à naviguer, cherchant des constellations de partenaires qui partageront notre vision et contribueront à la croissance de notre navire. Nous sommes sur le point de hisser de nouvelles voiles, de découvrir des horizons prometteurs, et de bâtir des ponts entre les terres crypto encore inconnues.</div>
                <div className="paragraph">Restez à l'écoute, chers membres d'équipage, car chaque aube peut apporter la découverte de nouvelles contrées et l'établissement de partenariats fructueux. Ensemble, nous sommes prêts à écrire les chapitres futurs de notre aventure.</div>
              </div>
        </section>
      </div>
        <Footer />
    </>
  )
}
