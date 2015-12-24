using System;
using System.Linq;
using System.Reactive.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Shapes;

namespace WpfApplication2
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            var mouseDown = Observable.FromEvent<MouseButtonEventHandler, MouseButtonEventArgs>(
                h => (s, e) => h(e),
                h => MouseDown += h,
                h => MouseDown -= h);

            var mouseMove = Observable.FromEvent<MouseEventHandler, MouseEventArgs>(
                h => (s, e) => h(e),
                h => MouseMove += h,
                h => MouseMove -= h);

            var mouseUp = Observable.FromEvent<MouseButtonEventHandler, MouseButtonEventArgs>(
                h => (s, e) => h(e),
                h => MouseUp += h,
                h => MouseUp -= h);

            var drag = mouseDown
                .Do(e => CaptureMouse())
                .Select(e =>
                {
                    var startPosition = e.GetPosition(this);
                    var line = new Line();
                    line.X1 = startPosition.X;
                    line.Y1 = startPosition.Y;
                    line.X2 = startPosition.X;
                    line.Y2 = startPosition.Y;
                    line.Stroke = Brushes.Black;
                    line.StrokeDashArray = new DoubleCollection { 2, 2 };
                    Canvas.Children.Add(line);

                    return line;
                })
                .Do(line =>
                {
                    mouseUp
                        .Take(1)
                        .Do(_ => line.StrokeDashArray = null)
                        .Subscribe();
                })
                .SelectMany(line => mouseMove.Select(moveEvent =>
                {
                    var curentPosition = moveEvent.GetPosition(this);
                    line.X2 = curentPosition.X;
                    line.Y2 = curentPosition.Y;

                    return line;
                }))
                .TakeUntil(mouseUp.Do(e => ReleaseMouseCapture()))
                .Repeat()
                .Subscribe();
        }
    }
}
