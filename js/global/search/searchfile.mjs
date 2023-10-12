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
              <h2 class="fs-5">Search profiles</h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
            <input
            type="text"
            class="modal-title fs-5 border-0 w-100 mb-2"
            placeholder="Search user.."
            id="search-input-modal"
          />
              
              <div
                class="col d-flex flex-wrap border border-1 border-secondary rounded" id="searchResultContainer"
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

            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  return searchModalElement;
}
