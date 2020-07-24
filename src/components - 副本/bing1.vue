<template>
  <div>
  
    <a-tooltip title="cb 1">
      <a-progress :percent="70" :success-percent="30" type="circle" />
    </a-tooltip>
	
    <a-tooltip title="cb 2">
      <a-progress :percent="60" :success-percent="30" type="dashboard" gapDegree="20"/>
    </a-tooltip>
  </div>
</template>
