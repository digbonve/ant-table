<template>
  <TableFilter
    :columns="columns"
    :data-source="data"
    :scroll="{ y: 163, x: 500 }"
    :pagination="false"
    :slider="true"
  >
    <template #headerCell="{ column }">
      <template v-if="column.unit">
        <p>{{ column.title }}</p>
        <p class="unit">{{ column.unit }}</p>
      </template>
    </template>
  </TableFilter>
</template>
<script lang="ts" setup>
import TableFilter from "./table.vue";

const columns = [
  {
    title: "标题",
    dataIndex: "name",
    width: 110,
  },
  {
    title: "标题标题",
    dataIndex: "model",
    width: 180,
  },
  {
    title: "标题标题",
    unit: "(m³)",
    dataIndex: "inlet",
    width: 160,
  },
  {
    title: "标题标题",
    unit: "(L/h)",
    dataIndex: "dosing",
    width: 160,
  },
  {
    title: "标题标题",
    unit: "(mg/L)",
    dataIndex: "PAC",
    width: 160,
    ellipsis: true,
  },
  {
    title: "标题标题",
    unit: "(NTU)",
    dataIndex: "turbidity",
    width: 186,
  },
  {
    title: "标题标题",
    unit: "(mg/L)",
    dataIndex: "chlorine",
    width: 186,
  },
  {
    title: "标题标题",
    unit: "(pH)",
    dataIndex: "PH",
    width: 158,
  },
];

interface tableItem {
  key: number;
  name: string;
  model: string;
  inlet: string;
  dosing: string;
  PAC: string;
  turbidity: string;
  chlorine: string;
  PH: string;
}

const data: tableItem[] = [...Array(100)].map((_, i) => ({
  key: i,
  name: `name#${i}`,
  model: "name",
  inlet: "45488",
  dosing: "12.76",
  PAC: "1.29",
  turbidity: "0.46",
  chlorine: "0.92",
  PH: "3.66",
}));
</script>

<style scoped></style>
