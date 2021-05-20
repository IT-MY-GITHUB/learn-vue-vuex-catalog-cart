<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>{{ popupTitle }}</span>
        <span>
          <i class="material-icons" @click="closePopup">close</i>
        </span>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
      <div class="v-popup__footer">
        <button class="close_modal" @click="closePopup">Close</button>
        <button class="submit_btn" @click="rightBtnAction">
          {{ rightBtnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'v-popup',
  props: {
    rightBtnTitle: {
      type: String,
      default: 'Ok',
    },
    popupTitle: {
      type: String,
      default: 'Popup Name',
    },
  },
  data() {
    return {};
  },
  methods: {
    closePopup() {
      this.$emit('closePopup');
    },
    rightBtnAction() {
      this.$emit('rightBtnAction');
    },
  },
  mounted() {
    let that = this;
    document.addEventListener('click', e => {
      if (e.target === that.$refs['popup_wrapper']) {
        that.closePopup();
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.popup_wrapper {
  background: #0f0e0e4b;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.v-popup {
  padding: 14px;
  position: fixed;
  top: 100px;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
  i:hover {
    cursor: pointer;
  }
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .submit_btn {
    padding: 8px;
    color: #fff;
    background: #26ae68;
  }
  .close_modal {
    padding: 8px;
    color: #fff;
    background: red;
  }
}
</style>
