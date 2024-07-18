const modalVideo = new bootstrap.Modal("#modalVideo");

window.onscroll = () => {
  const backToTopButton = document.getElementById("back-to-top");

  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

document.getElementById("back-to-top").onclick = () => {
  document.documentElement.scrollTop = 0;
};

const headerVideo = {
  title: "Growcast #01 | As profissões do futuro",
  image: "7OWT3lfHYvE",
  link: "7OWT3lfHYvE?si=ZIUrxgX5gZcjAeB6",
};

const videosGrowcast = [
  {
    title: "Growcast #00 | Conheça a Growdev",
    image: "aJ-HZuLcKeA",
    link: "aJ-HZuLcKeA?si=oFWKUcXb1urOYCzo",
  },
  {
    title: "Growcast #01 | As profissões do futuro",
    image: "7OWT3lfHYvE",
    link: "7OWT3lfHYvE?si=ZIUrxgX5gZcjAeB6",
  },
  {
    title: "Growcast #02 | Como seguir a carreira internacional?",
    image: "ci1eQGPK89o",
    link: "ci1eQGPK89o?si=ELYQFDe8Nz3hUzmZ",
  },
  {
    title: "Growcast #03 | Superando os desafios da carreira de Dev!",
    image: "WM7pGG7OicQ",
    link: "WM7pGG7OicQ?si=pDYTocDib3ELAzal",
  },
  {
    title: "Growcast #04 | Agile Master: tudo sobre a profissão!",
    image: "2c8VOBZ160Y",
    link: "2c8VOBZ160Y?si=7j2OuSRMGODLmwQo",
  },
  {
    title:
      "Growcast #5 | Como iniciar na carreira em Desenvolvimento de Softwares?",
    image: "mxnEm03cYPc",
    link: "mxnEm03cYPc?si=jgJ9tqfObVVdrRfl",
  },
  {
    title: "Growcast #06 | Mulheres e inclusão na tecnologia",
    image: "m7DyR07KrOE",
    link: "m7DyR07KrOE?si=JD5hF2pgupzVB0Gp",
  },
  {
    title: "Growcast #07 | Desenvolvendo profissionais na área de TI",
    image: "vW8G9KPwRL0",
    link: "vW8G9KPwRL0?si=2VKEjhDtRo21RVnO",
  },
  {
    title:
      "Growcast #8 | A solução que está transformando o mercado de TI no Brasil",
    image: "_Ut2KqAqPyk",
    link: "_Ut2KqAqPyk?si=b6EKgFi6GeoRWk53",
  },
  {
    title:
      "Growcast #9 | Acompanhe com quem realmente entende, tudo sobre o mercado de trabalho no mundo da TI.",
    image: "dfDgs0Ive2Q",
    link: "dfDgs0Ive2Q?si=VM-F69n8a5t0aFfw",
  },
];

const videosFlutter = [
  {
    title: "Webinar - Recriando a interface do Linkedin com Flutter",
    image: "WKbLXuP9S-c",
    link: "WKbLXuP9S-c?si=w6pdQ6g-bYFJMh8a",
  },
  {
    title: "Webinar - Recriando a interface do Instagram com Flutter",
    image: "dJ6y1zMjVXU",
    link: "dJ6y1zMjVXU?si=mw_F2hg_G6AZDG4I",
  },
  {
    title: "Webinar - Recriando a interface do iFood com Flutter",
    image: "8rdJsqUjsGg",
    link: "8rdJsqUjsGg?si=QXfdFhDOfLn78q2l",
  },
  {
    title: "Webinar - Recriando a interface do PicPay com Flutter",
    image: "C4p_7qBsECw",
    link: "C4p_7qBsECw?si=pmY2UNYMgZXcfXyL",
  },
  {
    title: "Webinar - Recriando o layout do WhatsApp com Flutter",
    image: "L1pKoMC6hWk",
    link: "L1pKoMC6hWk?si=rA3wvFkw6g-2FhtE",
  },
];

const videosUxui = [
  {
    title:
      "Live #1 Jornada UX/UI: O papel do UX/UI Designer no desenvolvimento de um produto digital - Growdev",
    image: "-26aqPtgoEY",
    link: "-26aqPtgoEY?si=8IrDy98LOR3IPYrQ",
  },
  {
    title:
      "Live #2 Jornada UX/UI: O profissional de UX/UI Design no mercado digital - Growdev",
    image: "8sd3wuKTZMA",
    link: "8sd3wuKTZMA?si=2QRpNMu4k5VOtNF-",
  },
  {
    title:
      "Live #3 Jornada UX/UI: As oportunidades de estudar um programa de formação pagando após formado",
    image: "ZMZjQ9aRuIY",
    link: "ZMZjQ9aRuIY?si=XZtq89Ir7cgKEdl8",
  },
  {
    title:
      "Live #4 Jornada UX/UI: Como migrar para o UX/UI Design: a trajetória de uma designer - Growdev",
    image: "cwqDu0ZzbYE",
    link: "cwqDu0ZzbYE?si=B0-N15um2inuqBQK",
  },
  {
    title: "Live #5 Jornada UX/UI: O UX/UI Design é para todos?",
    image: "FiZMowbaiJA",
    link: "FiZMowbaiJA?si=_aewA7kFnXwMEF0K",
  },
];

const videosGeneral = [
  {
    title: "Célula de talentos - Uma solução Growdev",
    image: "QsuhYgsSYQo",
    link: "QsuhYgsSYQo?si=V3WxSJ-dhFDnhdba",
  },
  {
    title: "Como é o dia a dia de um dev? Live Growdev com Marcelo Eltz",
    image: "ouDn8z3PSqs",
    link: "ouDn8z3PSqs?si=PQ5Pj6_N9Zdmr0Cl",
  },
  {
    title:
      "Onde trabalhar com qualidade de software? Conheça a Testing Company, empresa parceira da Growdev",
    image: "cQDQNX6NXYo",
    link: "cQDQNX6NXYo?si=M9kyP0IawgRehsRQ",
  },
  {
    title: "WEBINAR ANALISTA DE DADOS - com Paulo Marcon da Arezzo&Co",
    image: "nKGbolkirBM",
    link: "nKGbolkirBM?si=Bq0m_ha5",
  },
  {
    title: "Tecnologia trazendo soluções para a Arezzo & CO | Ricardo Pinho",
    image: "6sZPsqNjeek",
    link: "6sZPsqNjeek?si=OCx3MIApT48UFljW",
  },
];

const headerPlayButton = document.getElementById("header-play-btn");
headerPlayButton.addEventListener("click", () => openVideo(headerVideo.link));

function openVideo(video) {
  const videoFrame = document.getElementById("video-frame");

  videoFrame.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${video}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  `;
  modalVideo.show();
}

function createThumbnail(video) {
  return `
    <div class="col-md-3 mb-5 pt-md-1 pb-md-3 position-relative hvr-grow">
      <div
        class="video-title position-absolute bottom-0 start-0 w-100 h-100 d-flex flex-column justify-content-end align-items-center"
      >
        <div
          type="button"
          class="text-white fs-6 d-flex align-items-center hvr-sweep-to-right"
          data-bs-toggle="modal"
          data-bs-target="#modalVideo"
          onclick="openVideo('${video.link}')"
        >
          <i class="bi bi-play-circle fs-1 pe-2"></i>
          ${video.title}
        </div>
      </div>
      <img
        src="http://img.youtube.com/vi/${video.image}/sddefault.jpg"
        class="img-thumbnail bg-black border-0"
        alt="${video.title}"
      />
    </div>
  `;
}

function listThumbnails(videos, sectionId) {
  const thumbnailSection = document.getElementById(sectionId);
  let thumbnailsHtml = "";

  videos.forEach((video) => {
    thumbnailsHtml += createThumbnail(video);
  });

  thumbnailSection.innerHTML = thumbnailsHtml;
}

document.addEventListener("DOMContentLoaded", () => {
  listThumbnails(videosGrowcast, "growcast-thumbnails");
  listThumbnails(videosFlutter, "flutter-thumbnails");
  listThumbnails(videosUxui, "uxui-thumbnails");
  listThumbnails(videosGeneral, "general-thumbnails");
});
