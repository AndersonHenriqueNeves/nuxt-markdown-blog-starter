<template>
  <div class="align-chart">
    <h4>CDI</h4>
    <Chart
      :size="{ width: 700, height: 420 }"
      :data="data"
      :margin="margin"
      :direction="direction"
      :axis="axis">

      <template #layers>
        <Grid strokeDasharray="2,2" />
        <Bar :dataKeys="['data', 'valor']" :barStyle="{ fill: '#90e0ef' }" />
      </template>

      <template #widgets>
        <Tooltip
          borderColor="#48CAE4"
          :config="{
          valor: { color: '#90e0ef' },
        }"
        />
      </template>
    </Chart>
  </div>

</template>

<script src="./index.ts" />

<style>
#app {
  color: #2ecc71
}

.align-chart {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
