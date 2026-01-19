import "./App.css";

// 通过vite读取./models 下所有json文件
type ModelData = Record<string, unknown>;
const modules: Record<string, ModelData> = import.meta.glob<ModelData>(
  "./models/**/*.json",
  {
    eager: true,
    import: "default",
  },
);

import View from "@/components/View";

function App() {
  return (
    <section className="flex flex-col gap-4">
      {Object.entries(modules).map(([key, data]) => (
        <View key={key} data={data} />
      ))}
    </section>
  );
}

export default App;
