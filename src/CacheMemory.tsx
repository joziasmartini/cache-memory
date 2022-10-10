import './CacheMemory.sass';

function CacheMemory() {
  return (
    <main className="cache-memory-container">
      <header className="cache-memory-header">
        <svg className="cpu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60"><path fill="#333333" fill-rule="evenodd" d="M8.75 8a.75.75 0 00-.75.75v6.5c0 .414.336.75.75.75h6.5a.75.75 0 00.75-.75v-6.5a.75.75 0 00-.75-.75h-6.5zm.75 6.5v-5h5v5h-5z"></path><path fill="#333333" fill-rule="evenodd" d="M15.25 1a.75.75 0 01.75.75V4h2.25c.966 0 1.75.784 1.75 1.75V8h2.25a.75.75 0 010 1.5H20v5h2.25a.75.75 0 010 1.5H20v2.25A1.75 1.75 0 0118.25 20H16v2.25a.75.75 0 01-1.5 0V20h-5v2.25a.75.75 0 01-1.5 0V20H5.75A1.75 1.75 0 014 18.25V16H1.75a.75.75 0 010-1.5H4v-5H1.75a.75.75 0 010-1.5H4V5.75C4 4.784 4.784 4 5.75 4H8V1.75a.75.75 0 011.5 0V4h5V1.75a.75.75 0 01.75-.75zm3 17.5a.25.25 0 00.25-.25V5.75a.25.25 0 00-.25-.25H5.75a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h12.5z"></path></svg>
        <h1 className="title">cache-memory</h1>
        <p className="subtitle">A cache memory implementation in TypeScript.</p>
      </header>

        <section id="form">

          <input id="input" className="input" type="text" placeholder="Write here"/>

          <section className="button-area">
            <span onClick={() => {}} className="button">Read</span>
            <span onClick={() => {}} className="button">Write</span>
            <span onClick={() => {}} className="button">List</span>
            <span onClick={() => {}} className="button">Exit</span>
          </section>

        </section>

        <section className="option-result">
          <p id="option-return"></p>
        </section>

        <section className="memory-data">
          <div id="cache">
            <p>Cache</p>
          </div>
          <div id="memory">
            <p>Memory</p>
          </div>
          <div id="hit">
            <p>Hit</p>
          </div>
        </section>
    </main>
  );
}

export default CacheMemory;
