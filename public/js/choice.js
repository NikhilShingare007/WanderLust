document.addEventListener("DOMContentLoaded", function () {
  const allCategories = [
    "trending",
    "beach",
    "rooms",
    "iconic cities",
    "mountains",
    "castles",
    "amazing pools",
    "camping",
    "river",
    "arctic",
  ];

  const element = document.getElementById("categories");

  if (element) {
    // Fallback if listing not defined (e.g., on new listing form)
    const selectedCategories = typeof listing !== "undefined" && listing.categories
      ? listing.categories
      : [];

    const predefinedCategories = allCategories.map((category) => ({
      value: category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
      selected: selectedCategories.includes(category),
    }));

    const choices = new Choices(element, {
      removeItemButton: true,
      placeholderValue: "Select categories",
      searchEnabled: false,
      shouldSort: false,
    });

    choices.setChoices(predefinedCategories, "value", "label", true);
  }
});
