import React from "react";

import { Result, Button } from "antd";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Essa rota errada foi deixada de propósito, para mostrar tratamento de rota com erro, clique abaixo e volte a nossa página inicial!"
      extra={
        <Button type="primary">
          <Link to="/">Página Inicial</Link>
        </Button>
      }
    />
  );
}
