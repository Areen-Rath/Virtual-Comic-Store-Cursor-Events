AFRAME.registerComponent("cursor-listener", {
    schema: {
        itemId: {
            type: "string",
            default: ''
        }
    },
    init: function() {
        this.enter();
        this.leave();
        this.click();
    },
    handlePlaces: function() {
        const id = this.el.getAttribute("id");
        const placesId = ["superman", "spiderman", "avengers", "calvinhobbes"];
        if (placesId.includes(id)) {
            const placesContainer = document.querySelector("#posters-container");
            placesContainer.setAttribute("cursor-listener", {
                itemId: id
            });
            this.el.setAttribute("material", {
                color: "#d76b30",
                opacity: 1
            });
        }
    },
    enter: function() {
        this.el.addEventListener("mouseenter", () => {
            this.handlePlaces();
        });
    },
    leave: function() {
        this.el.addEventListener("mouseleave", () => {
            const { itemId } = this.data;
            if (itemId) {
                const el = document.querySelector(`#${itemId}`);
                const id = el.getAttribute("id");
                if (id === itemId) {
                    el.setAttribute("material", {
                        color: "#0077cc",
                        opacity: 1
                    });
                }
            }
        });
    },
    click: function() {
        this.el.addEventListener("click", e => {
            const placesContainer = document.querySelector("#posters-container");
            const { state } = placesContainer.getAttribute("tour");
            if (state === "posters-list") {
                const id = this.el.getAttribute("id");
                const placesId = ["superman", "spiderman", "avengers", "calvinhobbes"];
                if (placesId.includes(id)) {
                    placesContainer.setAttribute("tour", {
                        state: "view",
                        selectedCard: id
                    });
                }
            }
        });
    }
});