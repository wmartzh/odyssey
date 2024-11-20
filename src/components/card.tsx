import * as CardNative from '@/components/ui/card';

type TCardProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  headerTextClassName?: string;
  headerClassName?: string;
};

function Card(props: TCardProps) {
  return (
    <CardNative.Card className={props.className}>
      {props.title || props.description ? (
        <CardNative.CardHeader className={props.headerClassName}>
          {props.title && (
            <CardNative.CardTitle className={props.headerTextClassName}>
              {props.title}
            </CardNative.CardTitle>
          )}
          {props.description && (
            <CardNative.CardDescription>
              {props.description}
            </CardNative.CardDescription>
          )}
        </CardNative.CardHeader>
      ) : null}
      <CardNative.CardContent>{props.children}</CardNative.CardContent>
    </CardNative.Card>
  );
}

export default Card;
