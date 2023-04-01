import Footer from "./Footer";

export default function Gallery() {
  return (
    <>
      <h3 class="pl-8 pt-4 text-4xl">
        Projects <span class="text-2xl">I've worked on</span>
      </h3>
      <div class="grid grid-cols-2 gap-8 p-8 pt-10">
        <div>
          <a
            href="https://flipkart-clone-d124.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/cbhP3JL/New-Project.jpg"
              alt=""
            />
          </a>
        </div>

        <div>
          <a
            href="https://camp-circle.cyclic.app/campgrounds"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/frJ9ztc/New-Project-1.jpg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a
            href="https://whatsapp-clone-83cb.onrender.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/k8Z1TWp/New-Project-2.jpg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a
            href="https://react-search-github-users.netlify.app/login"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/SPJxPrR/New-Project-3.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
