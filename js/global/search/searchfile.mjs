export function searchModal() {
  const searchModalElement = document.createElement("div");
  searchModalElement.innerHTML = `
  <div class="col">
      <!-- Modal -->
      <div
        class="modal fade"
        id="search-result-modal"
        tabindex="-1"
        aria-labelledby="search-result-modal-label"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <input
                type="text"
                class="modal-title fs-5 border-0"
                placeholder="Search here.."
                id="search-input-modal"
              />
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="usernameRadio"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="usernameRadio">
                  Username
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="hashtagRadio"
                  value="option2"
                />
                <label class="form-check-label" for="hashtagRadio">
                  Hashtag
                </label>
              </div>
              <div
                class="col d-flex flex-wrap border border-1 border-secondary" id="searchResultContainer"
              >
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button type="button" class="btn btn-primary" id="send-new-post">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  return searchModalElement;
}
