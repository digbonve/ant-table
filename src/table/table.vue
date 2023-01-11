<template>
  <a-table v-bind="$attrs" :id="elementById">
    <!-- 卡顿 -->
    <template v-for="item in Object.keys($slots)" #[item]="data" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </a-table>
  <!-- v-model:value="sliderValue" 卡顿 去掉:value不卡顿 不能设置值 -->
  <a-slider
    v-model="sliderValue"
    :tip-formatter="null"
    :max="sliderMax"
    @change="handlerSlider"
    class="table-scrollX"
  />
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const elementById = ref<string>("");
const sliderFocus = ref<boolean>(false);
const sliderValue = ref<number>(0);
const sliderMax = ref<number>(100);

elementById.value = "TableFilter" + crypto.randomUUID();

const handleScroll = () => {
  if (!sliderFocus.value) {
    const tableFilterElement = document.getElementById(
      elementById.value
    ) as HTMLElement;
    sliderValue.value =
      tableFilterElement.getElementsByClassName("ant-table-body")[0]
        ?.scrollLeft | 0;
  }
};

let times: any;

const handlerSlider = (value: any) => {
  if (times) {
    clearTimeout(times);
  }
  let antTableBody = document
    .getElementById(elementById.value)
    ?.getElementsByClassName("ant-table-body")[0] as HTMLElement;
  if (!sliderFocus.value) {
    sliderFocus.value = true;
  }

  setTimeout(() => {
    sliderFocus.value = false;
  }, 200);
  antTableBody.scrollLeft = value;
};

onMounted(() => {
  const tableFilterElement = document.getElementById(
    elementById.value
  ) as HTMLElement;
  if (tableFilterElement) {
    const tableBody = tableFilterElement.getElementsByTagName(
      "table"
    )[1] as HTMLElement;
    const antTableBody = tableFilterElement.getElementsByClassName(
      "ant-table-body"
    )[0] as HTMLElement;
    if (tableBody && antTableBody) {
      sliderMax.value = tableBody.clientWidth - antTableBody.clientWidth;
    }
    tableFilterElement
      .getElementsByClassName("ant-table-body")[0]
      ?.addEventListener("scroll", handleScroll);
  }
});
onBeforeUnmount(() => {
  const tableFilterElement = document.getElementById(
    elementById.value
  ) as HTMLElement;
  if (tableFilterElement) {
    tableFilterElement
      .getElementsByClassName("ant-table-body")[0]
      ?.removeEventListener("scroll", handleScroll);
  }
});
</script>

<style lang="less" scoped></style>
