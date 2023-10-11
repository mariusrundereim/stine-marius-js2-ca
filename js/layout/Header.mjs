export function Header() {
  const htmlHeader = document.createElement("header");
  htmlHeader.innerHTML = `
  <header class="sticky-top bg-white shadow-sm p-2">
        <div class="container">
          <div class="d-flex justify-content-between gap-2 flex-wrap">
            <div class="d-flex">
              <a
                href="/feed/index.html"
                class="d-flex align-items-center link-body-emphasis text-decoration-none me-3"
              >
                <h2>Twist</h2>
              </a>

              <nav class="nav d-none d-sm-block">
                <ul
                  class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
                >
                  <li class="nav-item">
                    <a
                      href="/feed/index.html"
                      class="nav-link px-2 link-secondary"
                      >Feed</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      href="/profile/index.html"
                      class="nav-link px-2 link-secondary"
                      >Profile</a
                    >
                  </li>
                  
                  <li class="nav-item">
                    <a
                      href="#"
                      class="text-center nav-link px-2 link-secondary"
        data-bs-toggle="modal"
        data-bs-target="#search-result-modal"
                      >Explore</a
                    >
                  </li>
                </ul>
              </nav>
            </div>

            <div class="d-flex flex-wrap gap-2 justify-content-between">
              <form
                class="col-8 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
              >
                <input
                  type="search"
                  class="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                  id="searchHeader"
                />
              </form>

              <div class="dropdown text-end">
                <a
                  href="#"
                  class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    width="32"
                    height="32"
                    class="rounded-circle"
                  />
                </a>
                <ul class="dropdown-menu text-small">
                  <li>
                    <a class="dropdown-item" href="/feed/index.html">Feed</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/profile/index.html"
                      >Profile</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Settings</a>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="/index.html" id="signOut">Sign out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
  `;
  return htmlHeader;
}
