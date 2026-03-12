import { DataStructure } from './types';

export const DATA_STRUCTURES: DataStructure[] = [
  {
    id: 'array',
    name: 'Array',
    nameThai: 'อาร์เรย์',
    category: 'linear',
    description: 'A collection of elements identified by index or key. Elements are stored in contiguous memory locations.',
    descriptionThai: 'กลุ่มของข้อมูลที่เก็บไว้ในหน่วยความจำที่ต่อเนื่องกัน โดยเข้าถึงข้อมูลผ่านดัชนี (Index)',
    keyFeatures: ['Fixed size', 'Indexed access', 'Contiguous memory'],
    keyFeaturesThai: ['ขนาดคงที่', 'เข้าถึงด้วยดัชนี', 'เก็บในหน่วยความจำต่อเนื่อง'],
    visualType: 'array'
  },
  {
    id: 'stack',
    name: 'Stack',
    nameThai: 'สแต็ก',
    category: 'linear',
    description: 'A Last-In-First-Out (LIFO) structure where elements are added and removed from the same end.',
    descriptionThai: 'โครงสร้างข้อมูลแบบ "เข้าทีหลัง-ออกก่อน" (LIFO) โดยการเพิ่มและลบข้อมูลจะทำที่ปลายด้านเดียว',
    keyFeatures: ['LIFO principle', 'Push/Pop operations', 'Undo mechanisms'],
    keyFeaturesThai: ['หลักการ LIFO', 'การดำเนินการ Push/Pop', 'ใช้ในระบบย้อนกลับ (Undo)'],
    visualType: 'stack'
  },
  {
    id: 'queue',
    name: 'Queue',
    nameThai: 'คิว',
    category: 'linear',
    description: 'A First-In-First-Out (FIFO) structure where elements are added at the rear and removed from the front.',
    descriptionThai: 'โครงสร้างข้อมูลแบบ "เข้าก่อน-ออกก่อน" (FIFO) โดยเพิ่มข้อมูลที่ส่วนท้ายและลบที่ส่วนหน้า',
    keyFeatures: ['FIFO principle', 'Enqueue/Dequeue', 'Scheduling tasks'],
    keyFeaturesThai: ['หลักการ FIFO', 'การดำเนินการ Enqueue/Dequeue', 'ใช้ในการจัดลำดับงาน'],
    visualType: 'queue'
  },
  {
    id: 'linked-list',
    name: 'Linked List',
    nameThai: 'ลิงค์ลิสต์',
    category: 'linear',
    description: 'A linear collection of data elements called nodes, where each node points to the next node.',
    descriptionThai: 'กลุ่มของข้อมูลที่เรียกว่า "โหนด" (Node) โดยแต่ละโหนดจะมีการเก็บข้อมูลและตัวชี้ไปยังโหนดถัดไป',
    keyFeatures: ['Dynamic size', 'Non-contiguous memory', 'Efficient insertion/deletion'],
    keyFeaturesThai: ['ขนาดปรับเปลี่ยนได้', 'ไม่ต้องเก็บในหน่วยความจำต่อเนื่อง', 'แทรก/ลบข้อมูลได้รวดเร็ว'],
    visualType: 'linked-list'
  },
  {
    id: 'tree',
    name: 'Tree',
    nameThai: 'ทรี',
    category: 'non-linear',
    description: 'A hierarchical structure with a root value and subtrees of children with a parent node.',
    descriptionThai: 'โครงสร้างแบบลำดับชั้นที่มีโหนดราก (Root) และโหนดย่อยที่มีความสัมพันธ์แบบพ่อ-ลูก (Parent-Child)',
    keyFeatures: ['Hierarchical', 'Root node', 'Parent-child relationship'],
    keyFeaturesThai: ['โครงสร้างลำดับชั้น', 'มีโหนดราก', 'ความสัมพันธ์แบบพ่อ-ลูก'],
    visualType: 'tree'
  },
  {
    id: 'graph',
    name: 'Graph',
    nameThai: 'กราฟ',
    category: 'non-linear',
    description: 'A set of vertices (nodes) and edges that connect these vertices.',
    descriptionThai: 'ชุดของจุดยอด (Vertices) และเส้นเชื่อม (Edges) ที่เชื่อมต่อจุดยอดเหล่านั้นเข้าด้วยกัน',
    keyFeatures: ['Nodes and Edges', 'Complex relationships', 'Network modeling'],
    keyFeaturesThai: ['จุดยอดและเส้นเชื่อม', 'ความสัมพันธ์ที่ซับซ้อน', 'การจำลองเครือข่าย'],
    visualType: 'graph'
  }
];
