import { reactive, ref, watch } from "vue";

export function useNavbar(navbar) {
  const isOpen = ref(false);

  const toggle = () => {
    isOpen.value = !isOpen.value;
  };

  const toggleAnimation = () => {
    if (isOpen.value) {
      navbar.value.classList.add("active");
      navbar.value.style.display = "block";
    } else {
      navbar.value.classList.remove("active");
      setTimeout(() => {
        navbar.value.style.display = "none";
      }, 450);
    }
  };

  watch(isOpen, (value) => {
    if (!navbar.value) {
      return;
    }

    toggleAnimation();
  });

  return reactive({
    isOpen,
    toggle,
  });
}
