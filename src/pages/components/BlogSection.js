import Link from "next/link";
import Image from "next/image";

const BlogSection = () => {
  return (
    <div className="container content-space-1">
      {/* Heading */}
      <div className="w-lg-65 text-center mx-lg-auto mb-7">
        <h3>Discover the power of Broadcasting</h3>
        <p className="fs-6">
          SwahilipotFM is revolutionizing Information and Entertainment through
          these ear-tingling programs.
        </p>
      </div>
      {/* End Heading */}

      <div className="row mb-5 mb-sm-5">
        <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
          <div className="card h-100 p-2">
            <Image
              className="card-img"
              src="/assets/img/600x400/img1.jpg"
              alt="Image Description"
              width={600}
              height={400}
            />
            <div className="card-body">
              <h5 className="card-title">Program 1</h5>
              <p className="card-text">
                This is where we really begin to visualize your napkin sketches
                and make them into beautiful pixels.
              </p>
              <Link href="../blog-article.html">
                Learn about Program 1{" "}
                <i className="bi-chevron-right small ms-1"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Repeat similar structure for other columns */}

        <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
          <div className="card h-100 p-2">
            <Image
              className="card-img"
              src="/assets/img/600x400/img2.jpg"
              alt="Image Description"
              width={600}
              height={400}
            />
            <div className="card-body">
              <h5 className="card-title">Program 2</h5>
              <p className="card-text">
                Now that we've aligned the details, it's time to get things
                mapped out and organized.
              </p>
              <Link href="../blog-article.html">
                Learn about Program 3{" "}
                <i className="bi-chevron-right small ms-1"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
          <div className="card h-100 p-2">
            <Image
              className="card-img"
              src="/assets/img/600x400/img3.jpg"
              alt="Image Description"
              width={600}
              height={400}
            />
            <div className="card-body">
              <h5 className="card-title">Program 3</h5>
              <p className="card-text">
                We strive to embrace and drive change in our industry which
                allows us to keep our clients relevant.
              </p>
              <Link href="../blog-article.html">
                Learn about Program 3{" "}
                <i className="bi-chevron-right small ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Row */}

      {/* Info */}
      <div className="text-center">
        <p className="mb-0">Want to read more?</p>
        <Link className="link" href="../blog-classic.html">
          Explore SwahilipotFM news{" "}
          <i className="bi-chevron-right small ms-1"></i>
        </Link>
      </div>
      {/* End Info */}
    </div>
  );
};

export default BlogSection;
