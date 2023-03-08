import * as THREE from "three";

export default function pieces(scale: number): THREE.Group {
  const group = new THREE.Group();

  return createIpiece(group, scale);
}

function createIpiece(group: THREE.Group, scale: number): THREE.Group {
  const geometry = new THREE.BoxGeometry(scale, scale, scale);
  const material = new THREE.MeshBasicMaterial({ color: 0x68dbf7 });
  const outlineMaterial = new THREE.MeshBasicMaterial({
    color: 0x4aa0b5,
    side: THREE.BackSide,
    wireframe: true,
  });

  const cube1 = new THREE.Mesh(geometry, material);
  const cube2 = new THREE.Mesh(geometry, material);
  const cube3 = new THREE.Mesh(geometry, material);
  const cube4 = new THREE.Mesh(geometry, material);

  cube1.position.set(0, 0, 0);
  cube2.position.set(0, scale + scale, 0);
  cube3.position.set(0, scale, 0);
  cube4.position.set(0, scale * -1, 0);

  cube1.add(new THREE.Mesh(geometry, outlineMaterial));
  cube2.add(new THREE.Mesh(geometry, outlineMaterial));
  cube3.add(new THREE.Mesh(geometry, outlineMaterial));
  cube4.add(new THREE.Mesh(geometry, outlineMaterial));

  group.add(cube2);
  group.add(cube3);
  group.add(cube4);
  group.add(cube1);
  group.position.y = 3;

  return group;
}

function createZpiece(group: THREE.Group, scale: number): THREE.Group {
  const geometry = new THREE.BoxGeometry(scale, scale, scale);
  const material = new THREE.MeshBasicMaterial({ color: 0x85ff89 });
  const outlineMaterial = new THREE.MeshBasicMaterial({
    color: 0x4ab54e,
    side: THREE.BackSide,
    wireframe: true,
  });

  const cube1 = new THREE.Mesh(geometry, material);
  const cube2 = new THREE.Mesh(geometry, material);
  const cube3 = new THREE.Mesh(geometry, material);
  const cube4 = new THREE.Mesh(geometry, material);

  cube1.position.set(0, 0, 0);
  cube2.position.set(scale, scale, 0);
  cube3.position.set(0, scale, 0);
  cube4.position.set(scale * -1, 0, 0);

  cube1.add(new THREE.Mesh(geometry, outlineMaterial));
  cube2.add(new THREE.Mesh(geometry, outlineMaterial));
  cube3.add(new THREE.Mesh(geometry, outlineMaterial));
  cube4.add(new THREE.Mesh(geometry, outlineMaterial));

  group.add(cube2);
  group.add(cube3);
  group.add(cube4);
  group.add(cube1);
  group.position.y = 3;

  return group;
}

function createTpiece(group: THREE.Group, scale: number): THREE.Group {
  const geometry = new THREE.BoxGeometry(scale, scale, scale);
  const material = new THREE.MeshBasicMaterial({ color: 0x997af5 });
  const outlineMaterial = new THREE.MeshBasicMaterial({
    color: 0x5a40a8,
    side: THREE.BackSide,
    wireframe: true,
  });

  const cube1 = new THREE.Mesh(geometry, material);
  const cube2 = new THREE.Mesh(geometry, material);
  const cube3 = new THREE.Mesh(geometry, material);
  const cube4 = new THREE.Mesh(geometry, material);

  cube1.position.set(0, 0, 0);
  cube2.position.set(scale, 0, 0);
  cube3.position.set(0, scale, 0);
  cube4.position.set(scale * -1, 0, 0);

  cube1.add(new THREE.Mesh(geometry, outlineMaterial));
  cube2.add(new THREE.Mesh(geometry, outlineMaterial));
  cube3.add(new THREE.Mesh(geometry, outlineMaterial));
  cube4.add(new THREE.Mesh(geometry, outlineMaterial));

  group.add(cube2);
  group.add(cube3);
  group.add(cube4);
  group.add(cube1);
  group.position.y = 3;

  return group;
}
