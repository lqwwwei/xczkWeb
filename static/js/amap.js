// 地图初始化应该在地图容器div已经添加到DOM树之后
const map = new AMap.Map('container', {
  zoom: 14,
  center: [120.14671, 30.282206]
})
// 创建一个 Marker 实例：
const marker = new AMap.Marker({
  position: new AMap.LngLat(120.14671, 30.282206),
});

// 将创建的点标记添加到已有的地图实例：
map.add(marker);
