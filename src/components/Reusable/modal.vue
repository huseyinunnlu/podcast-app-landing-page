<template>
  <button :class="buttonClass + 'p-3'" @click="isShow = true">
    <i :class="buttonIcon"> </i> {{ buttonText }}
  </button>
  <div class="add-modal" v-show="isShow" ref="add-modal">
    <transition name="modal">
      <div class="add-modal-dialog" v-show="isShow">
        <div class="modal-header d-flex justify-content-between">
          <h4 :class="modalHeaderClass">{{ modalHeaderText }}</h4>
          <i
            class="fas fa-times clickable"
            @click="isShow = false"
            style="cursor: pointer"
          ></i>
        </div>
        <div class="modal-body">
          <slot name="modalBody"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
export default {
  props: {
    modalHeaderText: { type: String, default: 'Add' },
    modalHeaderClass: { type: String, required: false },
    buttonClass: {
      type: String,
      default: 'btn btn-primary btn-sm text-white',
    },
    buttonText: { type: String, required: false },
    buttonIcon: { type: String, default: 'fas fa-plus' },
  },
  data() {
    return {
      isLoading: false,
      isShow: false,
      form: {
        title: '',
      },
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.add-modal {
  z-index: 999999;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  overflow: scroll;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }

  .add-modal-dialog {
    max-width: 40%;
    background-color: #fff;
    top: 0;
    left: 0;
    height: 100vh;
    padding: 40px;
    overflow: auto;
    position: relative;
    color: #000;
    box-shadow: 10px 4px 6px -1px rgba(0, 0, 0, 0.2),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @media (max-width: 1200px) {
      max-width: 75%;
    }
    @media (max-width: 800px) {
      max-width: 80%;
    }
  }
  .modal-enter-active,
  .modal-leave-active {
    transition: all 0.5s ease;
  }

  .modal-enter-from,
  .modal-leave-to {
    transform: translateX(-700px);
  }
}
</style>
