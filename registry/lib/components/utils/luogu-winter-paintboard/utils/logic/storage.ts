import { getComponentSettings } from '@/core/settings'
import { console } from './other'

/** 返回组件选项 */
export const getOptions = () => {
  return getComponentSettings('luoguWinterPaintboard').options
}

/** 返回 localStorage */
export const getStorage = (optionName: string, isJson = true) => {
  if (isJson) {
    return JSON.parse(localStorage.getItem(optionName))
  }
  return localStorage.getItem(optionName)
}

/** 设置 localStorage */
export const setStorage = (optionName: string, optionValue: string, isJson = true) => {
  if (isJson) {
    localStorage.setItem(optionName, JSON.stringify(optionValue))
  }
  localStorage.setItem(optionName, optionValue)
}

/** 初始化 IndexedDB */
const initIdbDatabase = async () => {
  const dbOpenRequestPromise = (): Promise<IDBDatabase> =>
    new Promise(resolve => {
      const dbOpenRequest = window.indexedDB.open('luogu-winter-paintboard', 1)

      /** 创建数据库，创建 ObjectStore */
      dbOpenRequest.onupgradeneeded = ev => {
        const target = ev.target as IDBOpenDBRequest
        const db = target.result // onupgradeneeded 里的 db 不能传出去，只能在这用
        db.createObjectStore('main', { keyPath: 'optionName' })
      }

      /** 打开数据库 */
      dbOpenRequest.onsuccess = ev => {
        const target = ev.target as IDBOpenDBRequest
        const db = target.result
        resolve(db)
      }
    })

  const db = await dbOpenRequestPromise()
  return db
}

let database: IDBDatabase
let isDbInitialized = false

const getIdbDatabase = async () => {
  if (isDbInitialized) {
    return database
  }
  database = await initIdbDatabase()
  isDbInitialized = true
  return database
}

const getObjectStore = async (mode: IDBTransactionMode) => {
  const db = await getIdbDatabase()
  const transaction = db.transaction('main', mode)
  return transaction.objectStore('main')
}

/** 返回 IndexedDB */
export const getDb = async (optionName: string) => {
  // console.time(`getDb ${optionName}`)
  // console.log(`getDb ${optionName}`)
  const objectStore = await getObjectStore('readonly')

  const getRequestPromise = (): Promise<any> =>
    new Promise(resolve => {
      const getRequest = objectStore.get(optionName)

      getRequest.onsuccess = ev => {
        const target = ev.target as IDBRequest
        resolve(target.result.optionValue)
      }

      getRequest.onerror = ev => {
        const target = ev.target as IDBRequest
        console.error(optionName, ev, target)
      }
    })

  const result = await getRequestPromise()
  // console.timeEnd(`getDb ${optionName}`)
  return result
}

/** 设置 IndexedDB */
export const setDb = async (optionName: string, optionValue: any) => {
  // console.time(`setDb ${optionName}`)
  // console.log(`setDb ${optionName}`)
  const objectStore = await getObjectStore('readwrite')

  const setRequestPromise = (): Promise<IDBValidKey> =>
    new Promise(resolve => {
      const setRequest = objectStore.put({ optionName, optionValue })

      setRequest.onsuccess = ev => {
        const target = ev.target as IDBRequest
        resolve(target.result)
      }

      setRequest.onerror = ev => {
        const target = ev.target as IDBRequest
        console.error(optionName, optionValue, ev, target)
      }
    })

  await setRequestPromise()
  // console.timeEnd(`setDb ${optionName}`)
}

/** 输出 IndexedDB 储存数据 */
export const consoleDb = async () => {
  // console.time('consoleDb')
  // console.log('consoleDb')
  const objectStore = await getObjectStore('readonly')

  const getAllRequestPromise = (): Promise<any> =>
    new Promise(resolve => {
      const getAllRequest = objectStore.getAll()

      getAllRequest.onsuccess = ev => {
        const target = ev.target as IDBRequest
        resolve(target.result)
      }

      getAllRequest.onerror = ev => {
        const target = ev.target as IDBRequest
        console.error(ev, target)
      }
    })

  const result = await getAllRequestPromise()
  console.log(result)
  // console.timeEnd('consoleDb')
}
